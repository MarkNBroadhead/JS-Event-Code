addEventListener("keydown", keydown, false)

function keydown(event) {
    document.getElementById("codeHolder").innerHTML = event.code
}

