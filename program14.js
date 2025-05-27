let n = parseInt(prompt("Enter number of elements"))
let arr = []
let sum = 0
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Enter element " + (i + 1)))
    arr.push(num)
    sum += num
}
let avg = sum / n
console.log(sum)
console.log(avg)
