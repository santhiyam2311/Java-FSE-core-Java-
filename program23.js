function readFile(event) {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = function() {
        console.log(reader.result)
    }
    reader.readAsText(file)
}
