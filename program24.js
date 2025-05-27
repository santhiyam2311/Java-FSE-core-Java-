let names = []
let n = parseInt(prompt("How many names?"))
for (let i = 0; i < n; i++) {
    names.push(prompt("Enter name " + (i + 1)))
}
console.log(names)
