function add(a, b, c) {
    if (c !== undefined) return a + b + c
    return a + b
}
console.log(add(2, 3))
console.log(add(2.5, 3.5))
console.log(add(1, 2, 3))
