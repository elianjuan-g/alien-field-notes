// Local check: main.ts must write exactly the winning line to
// /output/entry.txt (UTF-8, 1-200 characters, not only whitespace,
// no trailing newline).
import { execFileSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import assert from "node:assert/strict";

const EXPECTED =
  "They set their food on fire once a year and make a wish on it. Four stars, the cake was worth the ritual.";

rmSync("/output/entry.txt", { force: true });
execFileSync(process.execPath, ["main.ts"], { cwd: import.meta.dirname, stdio: "inherit" });
const buf = readFileSync("/output/entry.txt");
const text = buf.toString("utf8");
assert.equal(text, EXPECTED, "entry text differs from the winning line");
assert.ok([...text].length >= 1 && [...text].length <= 200, "length out of gate range");
assert.ok(text.trim().length > 0, "entry is only whitespace");
assert.ok(!text.endsWith("\n"), "unexpected trailing newline");
assert.equal(Buffer.from(text, "utf8").toString("utf8"), text, "not valid UTF-8 round-trip");
console.log(`OK: ${[...text].length} chars, ${buf.length} bytes, exact match`);
