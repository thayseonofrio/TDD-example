import assert from "node:assert";
import { it, describe } from "node:test";
import { getFizzBuzzResult } from "./index.js";

describe("Non-TDD example", () => {
    it("should get FizzBuzz result", () => {
        const results = getFizzBuzzResult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15])
        assert.deepEqual(results, '[1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz","FizzBuzz"]')
    })
});
