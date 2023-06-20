
const isMultipleOfThree = (number) => number % 3 === 0

export const getFizzBuzzResult = (input) => {
    const result = input.map(item => {
        if (isMultipleOfThree(item)) {
            return "Fizz"
        }
        return item
    });
    return result.toString("")
}