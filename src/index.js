import cipher from './cipher.js';

let textToEncode = document.getElementById("textToEncode");
let textToDecode = document.getElementById("textToDecode");
let errorEncode = document.getElementById("errorEncode");
let errorDecode = document.getElementById("errorDecode");


const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");


encodeBtn.onclick = function (evento) {
    let text = textToEncode.value;
    let desloc = document.getElementById("encodeOffset").value
    let offset = parseInt(desloc);

    if (text == "" && desloc == "") {
        errorEncode.innerHTML = "*Os campos <b>Texto Original</b> e <b>Chave</b> precisam ser preenchidos";
        textToDecode.value = "";
        evento.preventDefault();

    } else if (text == "") {
        errorEncode.innerHTML = "*O campo <b>Texto Original</b> precisa ser preenchido";
        textToDecode.value = "";
        evento.preventDefault();

    } else if (desloc == "") {
        errorEncode.innerHTML = "*O campo <b>Chave</b> precisa ser preenchido";
        textToDecode.value = "";
        evento.preventDefault();

    } else {
        if (offset > 0) {
            let encodedText = cipher.encode(offset, text);
            textToDecode.value = encodedText;
            errorEncode.innerHTML = "";
            errorDecode.innerHTML = "";
            evento.preventDefault();
            

        } else if (offset < 0) {
            let encodedText = cipher.decode((-offset), text);
            textToDecode.value = encodedText;
            errorEncode.innerHTML = "";
            errorDecode.innerHTML = "";
            evento.preventDefault();

        } else {
            errorEncode.innerHTML = "*O campo <b>Chave</b> precisa ser preenchido com um número diferente de zero";
            textToDecode.value = "";
            evento.preventDefault();

        }
    }
}


decodeBtn.onclick = function (evento) {
    let text = textToDecode.value;
    let desloc = document.getElementById("decodeOffset").value
    let offset = parseInt(desloc);
    if (text == "" && desloc == "") {
        errorDecode.innerHTML = "*Os campos <b>Texto Original</b> e <b>Chave</b> precisam ser preenchidos";
        textToEncode.value = ""
        evento.preventDefault();

    } else if (text == "") {
        errorDecode.innerHTML = "*O campo <b>Texto Original</b> precisa ser preenchido";
        textToEncode.value = ""
        evento.preventDefault();

    } else if (desloc == "") {
        errorDecode.innerHTML = "*O campo <b>Chave</b> precisa ser preenchido";
        textToEncode.value = ""
        evento.preventDefault();

    } else {
        if (offset > 0) {
            let decodedText = cipher.decode(offset, text);
            textToEncode.value = decodedText;
            errorDecode.innerHTML = "";
            errorEncode.innerHTML = "";
            evento.preventDefault();

        } else if(offset<0){
            let decodedText = cipher.encode((-offset), text);
            textToEncode.value = decodedText;
            errorDecode.innerHTML = "";
            errorEncode.innerHTML = "";
            evento.preventDefault();

        }else{
            errorDecode.innerHTML = "*O campo <b>Chave</b> precisa ser preenchido";
            textToEncode.value = "*O campo <b>Chave</b> precisa ser preenchido com um número diferente de zero";
            evento.preventDefault();
        }
    }
}

//função copiar

const copyEncode = document.getElementById("copyEncode");
const copyDecode = document.getElementById("copyDecode");


copyEncode.addEventListener("click", (evento) =>{
    evento.preventDefault()
    textToEncode.select();
    document.execCommand("copy") 
})

copyDecode.addEventListener("click", (evento) =>{
    evento.preventDefault()
    textToDecode.select();
    document.execCommand("copy") 
})



