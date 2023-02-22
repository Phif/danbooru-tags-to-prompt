const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");
const inputPaste = document.getElementById("input-paste");
const outputCopy = document.getElementById("output-copy");
let tags; 

inputArea.oninput = () => {
    printToOutputArea();
}

inputPaste.onclick = async () => {
    if (navigator.clipboard) {
        inputArea.value = await navigator.clipboard.readText();
        printToOutputArea();
    }
}

outputCopy.onclick = () => {
    navigator.clipboard.writeText(outputArea.value)
}

function printToOutputArea() {
    tags = inputArea.value;
    
    let startIndex = /\? /gm
    let endIndex = /.\S+$/gm

    tags = tags.replaceAll(startIndex, "")
    tags = tags.replaceAll(endIndex, "")
    tags = tags.split("\n")

    outputArea.value = tags.join(", ");
}