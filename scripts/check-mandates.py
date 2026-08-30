#!/usr/bin/env python3
"""Validate Mandate Protocol examples with the JSON Schema subset used by v0.

This checker intentionally uses only Python's standard library and checked-out
files. It is not a general JSON Schema implementation. It supports exactly the
keywords used by protocols/mandate/schema.json so Desk remains locally
verifiable with zero hosted CI or package installation.
"""

from __future__ import annotations

import json
import math
import sys
from datetime import datetime
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
PROTOCOL = ROOT / "protocols" / "mandate"
SCHEMA_PATH = PROTOCOL / "schema.json"
EXAMPLES = PROTOCOL / "examples"
INVALID = EXAMPLES / "invalid"


def json_type_matches(value: Any, expected: str) -> bool:
    if expected == "null":
        return value is None
    if expected == "boolean":
        return isinstance(value, bool)
    if expected == "integer":
        return isinstance(value, int) and not isinstance(value, bool)
    if expected == "number":
        return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(value)
    if expected == "string":
        return isinstance(value, str)
    if expected == "array":
        return isinstance(value, list)
    if expected == "object":
        return isinstance(value, dict)
    raise ValueError(f"unsupported schema type: {expected}")


def valid_datetime(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None


def validate(schema: dict[str, Any], value: Any, path: str = "$") -> list[str]:
    errors: list[str] = []

    expected = schema.get("type")
    if expected is not None:
        types = expected if isinstance(expected, list) else [expected]
        if not any(json_type_matches(value, item) for item in types):
            errors.append(f"{path}: expected type {types}, got {type(value).__name__}")
            return errors

    if "enum" in schema and value not in schema["enum"]:
        errors.append(f"{path}: value {value!r} is not in enum {schema['enum']!r}")

    if isinstance(value, str):
        minimum_length = schema.get("minLength")
        if minimum_length is not None and len(value) < minimum_length:
            errors.append(f"{path}: string is shorter than minLength {minimum_length}")
        if schema.get("format") == "date-time" and not valid_datetime(value):
            errors.append(f"{path}: {value!r} is not an offset-aware date-time")

    if isinstance(value, (int, float)) and not isinstance(value, bool):
        minimum = schema.get("minimum")
        if minimum is not None and value < minimum:
            errors.append(f"{path}: {value!r} is below minimum {minimum}")

    if isinstance(value, list):
        minimum_items = schema.get("minItems")
        if minimum_items is not None and len(value) < minimum_items:
            errors.append(f"{path}: array has {len(value)} items; minItems is {minimum_items}")
        if schema.get("uniqueItems"):
            canonical = [json.dumps(item, sort_keys=True, separators=(",", ":")) for item in value]
            if len(canonical) != len(set(canonical)):
                errors.append(f"{path}: array items must be unique")
        item_schema = schema.get("items")
        if item_schema is not None:
            for index, item in enumerate(value):
                errors.extend(validate(item_schema, item, f"{path}[{index}]"))

    if isinstance(value, dict):
        required = schema.get("required", [])
        for key in required:
            if key not in value:
                errors.append(f"{path}: missing required property {key!r}")

        properties = schema.get("properties", {})
        for key, item in value.items():
            if key in properties:
                errors.extend(validate(properties[key], item, f"{path}.{key}"))
            elif schema.get("additionalProperties") is False:
                errors.append(f"{path}: unexpected property {key!r}")

    return errors


def load_json(path: Path) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise RuntimeError(f"cannot load {path.relative_to(ROOT)}: {exc}") from exc


def main() -> int:
    failed = False
    schema = load_json(SCHEMA_PATH)

    if schema.get("$schema") != "https://json-schema.org/draft/2020-12/schema":
        print("ERROR: mandate schema must declare JSON Schema draft 2020-12")
        failed = True

    valid_examples = sorted(path for path in EXAMPLES.glob("*.json") if path.is_file())
    invalid_examples = sorted(path for path in INVALID.glob("*.json") if path.is_file())

    if not valid_examples:
        print("ERROR: no valid mandate examples found")
        failed = True
    if not invalid_examples:
        print("ERROR: no invalid mandate rejection fixtures found")
        failed = True

    for path in valid_examples:
        errors = validate(schema, load_json(path))
        if errors:
            failed = True
            print(f"ERROR: {path.relative_to(ROOT)} should conform")
            for error in errors:
                print(f"  - {error}")
        else:
            print(f"PASS: {path.relative_to(ROOT)}")

    for path in invalid_examples:
        errors = validate(schema, load_json(path))
        if not errors:
            failed = True
            print(f"ERROR: {path.relative_to(ROOT)} is an invalid fixture but schema accepted it")
        else:
            print(f"PASS: rejected {path.relative_to(ROOT)}")
            for error in errors:
                print(f"  - {error}")

    if failed:
        print("\nMandate Protocol check failed.")
        return 1

    print(f"\nMandate Protocol check passed: {len(valid_examples)} conformant examples, "
          f"{len(invalid_examples)} rejection fixtures.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
