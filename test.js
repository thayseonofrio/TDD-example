import assert from "node:assert"
import {it, describe} from "node:test"
import {getFizzBuzzResult} from "./index.js"

describe("TDD example", () => {
    it("should get correct FizzBuzz result for input 1", () => {
        const input = [1]
        const result = getFizzBuzzResult(input)
        assert.deepStrictEqual(result, "1")
    })

    it("should get correct FizzBuzz result for input 1, 2, 3", () => {
        const input = [1, 2, 3]
        const result = getFizzBuzzResult(input)
        assert.deepStrictEqual(result, "1,2,Fizz")
    })
})

