var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//console.log(txtInput);

function clickHandler() {
    // console.log("Clicked!!!");
    // console.log("input",txtInput.value);
    outputDiv.innerText = "adjflksjdghgne  " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)