let a = parseInt(prompt("Enter first number"))
let b = parseInt(prompt("Enter second number"))
try {
    let result = a / b
    if (!isFinite(result)) throw new Error()
    console.log(result)
} catch {
    console.log("Cannot divide by zero")
}
