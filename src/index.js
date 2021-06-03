import cipher from './cipher.js';

let textToEncode = document.getElementById("textToEncode");
let textToDecode = document.getElementById("textToDecode");


const encodeForm = document.getElementById("encodeForm");
const decodeForm = document.getElementById("decodeForm");



encodeForm.onsubmit= function (evento){
    let text = textToEncode.value;
    let offset = parseInt(document.getElementById("encodeOffset").value);
    let encodedText = cipher.encode(text,offset);
    textToDecode.value= encodedText;
    evento.preventDefault();
}


decodeForm.onsubmit= function (evento){
    let text = textToDecode.value;
    let offset = parseInt(document.getElementById("decodeOffset").value);
    let decodedText = cipher.decode(text,offset);
    textToEncode.value=decodedText;
    evento.preventDefault();
}



