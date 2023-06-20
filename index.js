export const getFizzBuzzResult = (input) => {
    const transformedInput = input.map(item => {
        if (item % 3 === 0 && item % 5 === 0) {
            return "FizzBuzz"
        }
        if (item % 3 === 0) {
            return "Fizz"
        } 
        if (item % 5 === 0) {
            return "Buzz"
        }
        return item
    })
    return transformedInput
}