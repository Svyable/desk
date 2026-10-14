"""Regression checks for the synthetic search-policy experiment."""
import unittest

import controller as m


class SearchPolicyTest(unittest.TestCase):
    def test_split_reproducibility_and_balance(self):
        a = m.generate_cases("incident", 1, "train", 40)
        self.assertEqual(a, m.generate_cases("incident", 1, "train", 40))
        self.assertNotEqual(a, m.generate_cases("incident", 1, "test", 40))
        self.assertEqual(sorted(set(c.case_id for c in a)), sorted(c.case_id for c in a))
        self.assertEqual([sum(c.truth == h for c in a) for h in range(4)], [10] * 4)
        for c in a:
            self.assertEqual(len(c.observations), len(m.CHANNELS))
            self.assertEqual(len(c.confirmations), len(m.HYPOTHESES))

    def test_posterior_updates(self):
        belief = m.Belief()
        self.assertEqual(belief.guess(), (0, .25))
        belief.add_document(2)
        self.assertEqual(belief.guess()[0], 2)
        belief.add_verification(2, False)
        self.assertNotIn(2, belief.confirmed)
        self.assertAlmostEqual(sum(belief.probabilities()), 1.0)

    def test_budget_all_policies(self):
        train = m.generate_cases("incident", 5, "train", 64)
        p, calls = m.fit_bandit(train)
        self.assertEqual(calls, len(train))
        evolved, effort = m.fit_perturb(train, train[:24], 5, p, rounds=2, population=6)
        self.assertEqual(effort["candidate_evaluations"], 12)
        for policy in (m.FixedPolicy(), m.RandomPolicy(), p, evolved):
            for case in train:
                out = m.play(case, policy, m.random.Random(5))
                self.assertLessEqual(out.cost, m.BUDGET)
                self.assertGreaterEqual(out.calls, 1)
                self.assertLessEqual(out.calls, 4)
                self.assertTrue(0 <= out.confidence <= 1)
                if out.apparent_false_support:
                    self.assertTrue(out.supported)
                    self.assertFalse(out.correct)

    def test_illegal_policy_rejected(self):
        class Cheater(m.Policy):
            def choose(self, topic, belief, allowed, spent, rng):
                return 99
        with self.assertRaisesRegex(ValueError, "illegal action"):
            m.play(m.generate_cases("incident", 0, "test", 1)[0], Cheater(), m.random.Random(0))

    def test_heldout_and_transfer_reproducible(self):
        settings = dict(seed=13, n_train=32, n_dev=16, n_test=20,
                        rounds=2, population=5, domain="incident", test_domain="research")
        a = m.benchmark(**settings)
        b = m.benchmark(**settings)
        self.assertEqual(a, b)
        self.assertEqual(a["test_domain"], "research")
        self.assertEqual(set(a["evaluation"]), {"fixed", "random", "bandit", "perturb_select"})
        self.assertLess(a["training_effort"]["bandit_action_calls"],
                        a["training_effort"]["train_action_calls"])


if __name__ == "__main__":
    unittest.main()
