function writeFile() {
    let text = prompt("Enter text to write to file")
    let blob = new Blob([text], {type: 'text/plain'})
    let link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = "output.txt"
    link.click()
    console.log("Data written to file")
}
