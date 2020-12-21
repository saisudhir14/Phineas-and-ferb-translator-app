var txtInput = document.querySelector("#txtInput");
var txtOutput = document.querySelector("#txtOutput");
var btnTranslate = document.querySelector("#btnTranslate");

serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTraslationURL(inputText) {
    return serverURL + "?text=" + inputText;
}

function errorHandler(error) {
    console.log("error" , error);
    alert("This is due to server issue. I would request you to please check and try after sometime!")
}

function btnClickHandler() {
    inputText = txtInput.value;
    fetch(getTraslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        txtOutput.innerHTML = json.contents.translated;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", btnClickHandler);