let map = {}
let n = parseInt(prompt("How many entries?"))
for (let i = 0; i < n; i++) {
    let id = prompt("Enter ID")
    let name = prompt("Enter name")
    map[id] = name
}
let searchId = prompt("Enter ID to search")
console.log(map[searchId])
