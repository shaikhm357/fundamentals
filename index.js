
// factorial using recursion

const n = 5
const result = factorial(n)
console.log(`The factorial of ${n} is ${result}`)

function factorial(number) {
    if (number === 0) {
        return 1
    } else {
        // main logic
        return (number * factorial(n - 1))
    }
}