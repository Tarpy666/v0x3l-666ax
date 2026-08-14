import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { SeededChunks } from "../src/archetype";

describe("V0X3L-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(1);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const a = new SeededChunks();
const b = new SeededChunks();
for (let i = 0; i < 40; i++) expect(a.at(i, 0, i)).toBe(b.at(i, 0, i));
a.set(0, 0, 0, 9);
expect(a.at(0, 0, 0)).toBe(9);
expect(a.reach([0, 0, 0], [2, 2, 2])).toBe(true);
expect(a.reach([0, 0, 0], [20, 0, 0])).toBe(false);
  });
});
