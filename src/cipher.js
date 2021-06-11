const cipher = {
  encode: function (offset, string) {
    if ((typeof offset !== "number") || (typeof string !== "string")) {
      throw new TypeError
    }

    let decodedText = "";

    function crypt(menor, tamanho, code){
      let newCode = ((code - menor + offset) % tamanho) + menor;
      let newCharacter = String.fromCharCode(newCode);
      decodedText = decodedText.concat(newCharacter);

    }

    for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        crypt(65 , 26, code)

      } else if (code >= 97 && code <= 122) {
        crypt(97 , 26, code)

        //pontuações, caracteres e números
      } else if (code >= 32 && code <= 64) {
        crypt(32 , 33, code)

        //acentos, crase e outros caracteres
      } else if (code >= 91 && code <= 96) {
        crypt(91 , 6, code)

        //demais caracteres
      } else if (code >= 123 && code <= 254) {
        crypt(123 , 132, code)

      } else {
        decodedText = decodedText.concat(string.charAt(i));
      }
    }
    return decodedText
  },

  decode: function (offset, string) {
    if ((typeof offset !== "number") || (typeof string !== "string")) {
      throw new TypeError
    }

    function decrypt(maior, tamanho, code){
      let newCode = maior - ((maior - code + offset) % tamanho);
      let newCharacter = String.fromCharCode(newCode);
      encodedText = encodedText.concat(newCharacter);
    }

    let encodedText = "";
    for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        decrypt(90 , 26, code)

      } else if (code >= 97 && code <= 122) {
        decrypt( 122, 26, code)

        //pontuações, caracteres e números
      } else if (code >= 32 && code <= 64) {
        decrypt( 64, 33, code)
        //acentos, crase e outros caracteres
      } else if (code >= 91 && code <= 96) {
        decrypt( 96, 6, code)
        

      } else if (code >= 123 && code <= 254) {
        decrypt( 254, 132, code)
      

      } else {
        encodedText = encodedText.concat(string.charAt(i));
      }
    }
    return encodedText
  }

};

export default cipher;

