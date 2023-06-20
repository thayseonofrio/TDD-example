
const isMultipleOfThree = (number) => number % 3 === 0

const isMultipleOfFive = (number) => number % 5 === 0

export const getFizzBuzzResult = (input) => {
    const result = input.map(item => {
        if (isMultipleOfThree(item) && isMultipleOfFive(item)) {
            return "FizzBuzz"
        }
        if (isMultipleOfThree(item)) {
            return "Fizz"
        }
        if (isMultipleOfFive(item)) {
            return "Buzz"
        }
        return item
    });
    return result.toString("")
}