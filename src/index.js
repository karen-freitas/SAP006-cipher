import cipher from './cipher.js';

const textToEncode = document.getElementById("textToEncode");
const textToDecode = document.getElementById("textToDecode");
const errorEncode = document.getElementById("errorEncode");
const errorDecode = document.getElementById("errorDecode");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
    
encodeBtn.addEventListener("click", (evento) =>{
    const text = textToEncode.value;
    const desloc = document.getElementById("encodeOffset").value
    const offset = parseInt(desloc);

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
});

decodeBtn.addEventListener("click", (evento) =>{
    const text = textToDecode.value;
    const desloc = document.getElementById("decodeOffset").value
    const offset = parseInt(desloc);
    
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
            errorDecode.innerHTML = "*O campo <b>Chave</b> precisa ser preenchido com um número diferente de zero";
            textToEncode.value = "";
            evento.preventDefault();
        }
    }
});

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



