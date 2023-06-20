import assert from "node:assert";
import { it, describe } from "node:test";
import { getFizzBuzzResult } from "./index.js";

describe("TDD example", () => {
  it("should get fizzbuzz result", () => {
    const results = getFizzBuzzResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepStrictEqual(results, [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
    ]);
  });
});
