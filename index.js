
// factorial using recursion

const n = 5
const result = factorial(n)
console.log(`The factorial of ${n} is ${result}`)

function factorial(num) {

    let result = 1
    for (let i = 1; i <= num; i++) {
        result = result * i
    }

    return result
}