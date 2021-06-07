import cipher from './cipher.js';

let textToEncode = document.getElementById("textToEncode");
let textToDecode = document.getElementById("textToDecode");
let errorEncode = document.getElementById("errorEncode");
let errorDecode = document.getElementById("errorDecode");


const encodeForm = document.getElementById("encodeForm");
const decodeForm = document.getElementById("decodeForm");



encodeForm.onsubmit = function (evento) {
    let text = textToEncode.value;
    let desloc= document.getElementById("encodeOffset").value
    let offset = parseInt(desloc);

    if(text=="" && desloc=="" ){
        errorEncode.innerHTML="*Os campos <b>Texto Original</b> e <b>Chave</b> precisam ser preenchidos";
        textToDecode.value="";
        evento.preventDefault();

    }else if(text==""){
        errorEncode.innerHTML="*O campo <b>Texto Original</b> precisa ser preenchido";
        textToDecode.value="";
        evento.preventDefault();

    }else if(desloc=="" || desloc=="0"){
        errorEncode.innerHTML="*O campo <b>Chave</b> precisa ser preenchido com um número maior que 0";
        textToDecode.value="";
        evento.preventDefault();

    } else{
        let encodedText = cipher.encode(offset, text);
        textToDecode.value = encodedText;
        errorEncode.innerHTML="";
        errorDecode.innerHTML="";
        evento.preventDefault();

    }
   
}


decodeForm.onsubmit = function (evento) {
    let text = textToDecode.value;
    let desloc= document.getElementById("decodeOffset").value
    let offset = parseInt(desloc);
    if(text=="" && desloc=="" ){
        errorDecode.innerHTML="*Os campos <b>Texto Original</b> e <b>Chave</b> precisam ser preenchidos";
        textToEncode.value=""
        evento.preventDefault();

    }else if(text==""){
        errorDecode.innerHTML="*O campo <b>Texto Original</b> precisa ser preenchido";
        textToEncode.value=""
        evento.preventDefault();

    }else if(desloc=="" || desloc=="0"){
        errorDecode.innerHTML="*O campo <b>Chave</b> precisa ser preenchido com um número maior que 0";
        textToEncode.value=""
        evento.preventDefault();

    } else{
        let decodedText = cipher.decode(offset, text);
        textToEncode.value = decodedText;
        errorDecode.innerHTML="";
        errorEncode.innerHTML="";
        evento.preventDefault();

    }

}



