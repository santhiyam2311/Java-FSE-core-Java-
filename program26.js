function printMessage(name) {
    let count = 0
    let id = setInterval(() => {
        console.log("Thread " + name)
        count++
        if (count == 5) clearInterval(id)
    }, 500)
}
printMessage("A")
printMessage("B")
