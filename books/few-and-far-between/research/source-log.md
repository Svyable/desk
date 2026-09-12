# Source Log

Checked September 2026. Prefer the linked primary paper or journal landing page over secondary summaries.

1. G. H. Hardy & J. E. Littlewood, “Some Problems of ‘Partitio Numerorum’; III: On the Expression of a Number as a Sum of Primes,” *Acta Mathematica* 44 (1923), 1–70. Reference record: https://t5k.org/references/refs.cgi/HL23
2. Harald Cramér, “On the order of magnitude of the difference between consecutive prime numbers,” *Acta Arithmetica* 2 (1936), 23–46. https://doi.org/10.4064/aa-2-1-23-46
3. Andrew Granville, “Harald Cramér and the distribution of prime numbers,” *Scandinavian Actuarial Journal* 1995(1), 12–28. Granville explains why incorporating small-prime divisibility structure changes the naive Cramér extreme-gap heuristic and argues for the `2e^{-γ}` scale rather than the raw constant `1`. https://doi.org/10.1080/03461238.1995.10413946
4. R. C. Baker, G. Harman & J. Pintz, “The difference between consecutive primes. II,” *Proceedings of the London Mathematical Society* 83 (2001), 532–562. Standard source behind the unconditional short-interval/prime-gap exponent `0.525`; use to mark how far proved upper bounds remain from the Cramér `log² x` scale. https://doi.org/10.1112/plms/83.3.532
5. Kevin Ford, Ben Green, Sergei Konyagin, James Maynard & Terence Tao, “Long gaps between primes,” *Journal of the American Mathematical Society* 31 (2018), 65–105. Modern large-gap synthesis; explicitly contrasts rigorous large-gap lower bounds with Cramér/Granville heuristics and records the `G(X) << X^0.525` unconditional upper-bound scale and the much larger RH upper-bound scale. https://doi.org/10.1090/jams/876
6. Daniel A. Goldston, János Pintz & Cem Y. Yıldırım, “Primes in tuples I,” *Annals of Mathematics* 170 (2009), 819–862. https://annals.math.princeton.edu/2009/170-2/p10
7. Yitang Zhang, “Bounded gaps between primes,” *Annals of Mathematics* 179 (2014), 1121–1174. https://annals.math.princeton.edu/2014/179-3/p07
8. James Maynard, “Small gaps between primes,” *Annals of Mathematics* 181 (2015), 383–413. https://annals.math.princeton.edu/2015/181-1/p07
9. D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes,” *Research in the Mathematical Sciences* 1 (2014). Preprint: https://arxiv.org/abs/1407.4897
10. D. H. J. Polymath, “The ‘bounded gaps between primes’ Polymath project — a retrospective.” https://arxiv.org/abs/1409.8361
11. James Maynard, “Large gaps between primes,” *Annals of Mathematics* 183 (2016), 915–933. https://annals.math.princeton.edu/2016/183-3/p03
12. Kevin Ford, Ben Green, Sergei Konyagin & Terence Tao, “Large gaps between consecutive prime numbers,” *Annals of Mathematics* 183 (2016), 935–974. https://annals.math.princeton.edu/2016/183-3/p04
13. Larry Guth & James Maynard, “New large value estimates for Dirichlet polynomials,” *Annals of Mathematics* 203 (2026), 623–675. https://annals.math.princeton.edu/2026/203-2/p06
14. Ben Green & Terence Tao, “The primes contain arbitrarily long arithmetic progressions,” *Annals of Mathematics* 167 (2008), 481–547. https://annals.math.princeton.edu/2008/167-2/p03
15. Andrew Granville & Kannan Soundararajan, “An uncertainty principle for arithmetic sequences,” *Annals of Mathematics* 165 (2007), 593–635. https://annals.math.princeton.edu/2007/165-2/p06

## Claim boundaries for the Cramér chapter

- **Proved:** the prime number theorem implies average prime spacing near `x` is on the `log x` scale.
- **Model:** Cramér's independent Bernoulli construction places a prime-like success at `n` with probability about `1/log n`.
- **Heuristic/conjectural:** maximal gaps should live on a `log² x` extreme-value scale; the simplest model suggests constant `1`.
- **Refined heuristic:** Granville argues small-prime sieving changes the extreme constant, giving the `2e^{-γ} ≈ 1.1229` scale in the relevant lower-extreme prediction.
- **Rigorous upper-bound reality:** unconditional bounds are still of polynomial scale (`x^0.525` in the standard literature); RH alone gives a much larger-than-`log² x` bound of square-root scale up to logarithms. Do not present either Cramér or Granville as a theorem waiting only for a constant.
- **Finite computation:** record-gap data can test consistency over a range but cannot decide an asymptotic constant.

## Source-expansion queue

The next research pass should add primary or archival-quality sources for Brun’s twin-prime sieve, Chen Jingrun’s P2 theorem, Westzynthius’s normalized large-gap result, Rankin’s original large-gap construction, Maier’s 1985 matrix theorem, Bombieri–Vinogradov, Elliott–Halberstam, and current certified maximal-gap databases. Those topics are discussed in the manuscript only at theorem-level detail in this first pass and should be deepened before publication.
