export const getFizzBuzzResult = (input) => {
    const result = input.map(item => {
        if (item % 3 === 0) {
            return "Fizz"
        }
        return item
    });
    return result.toString("")
}