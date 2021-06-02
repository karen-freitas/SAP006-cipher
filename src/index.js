import cipher from './cipher.js';

let textToEncode = document.getElementById("textToEncode");
let textToDecode = document.getElementById("textToDecode")


const encodeForm = document.getElementById("encodeForm");
const decodeForm = document.getElementById("decodeForm");
const decodeButton = document.getElementById("decodeBtn");


encodeForm.onsubmit= function (evento){
    let text = textToEncode.value;
    console.log(text);
    let encodedText = cipher.encode(text);
    textToDecode.innerHTML= encodedText;
    evento.preventDefault();

}


decodeForm.onsubmit= function (evento){
    let text = textToDecode.value;
    console.log(text)
    let decodedText = cipher.decode(text)
    textToEncode.innerHTML=decodedText;
    evento.preventDefault();
}



