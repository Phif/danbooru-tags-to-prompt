const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");
const inputPaste = document.getElementById("input-paste");
const outputCopy = document.getElementById("output-copy");
let tags; 

const inputArea2 = document.getElementById("input2");
const outputArea2 = document.getElementById("output2");
const inputPaste2 = document.getElementById("input-paste2");
const outputCopy2 = document.getElementById("output-copy2");
let tags2; 

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

inputArea2.oninput = () => {
    printToOutputArea2();
}

inputPaste2.onclick = async () => {
    if (navigator.clipboard) {
        inputArea2.value = await navigator.clipboard.readText();
        printToOutputArea();
    }
}

outputCopy2.onclick = () => {
    navigator.clipboard.writeText(outputArea2.value)
}

function printToOutputArea2() {
    tags2 = inputArea2.value;
    tags2 = tags2.replaceAll("_", " ")
    outputArea2.value = tags2;
}