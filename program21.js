class InvalidAgeException extends Error {
    constructor() {
        super("Age must be 18 or above")
    }
}
let age = parseInt(prompt("Enter your age"))
try {
    if (age < 18) throw new InvalidAgeException()
    console.log("Access granted")
} catch (e) {
    console.log(e.message)
}
