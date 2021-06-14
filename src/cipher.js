const cipher = {
  encode: function (offset, string) {
    if ((typeof offset !== "number") || (typeof string !== "string")) {
      throw new TypeError
    }

    function crypt(menor, tamanho, code, offset){
      let newCode = ((code - menor + offset) % tamanho) + menor;
      let newCharacter = String.fromCharCode(newCode);
      return newCharacter
    }

    for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);
      let decodedText = "";
      let character;

      if (code >= 65 && code <= 90) {
        character = crypt(65 , 26, code, offset)
        decodedText = decodedText.concat(character);


      } else if (code >= 97 && code <= 122) {
        character = crypt(97 , 26, code, offset)
        decodedText = decodedText.concat(character);

      } else if (code >= 32 && code <= 64) {
        character = crypt(32 , 33, code, offset)
        decodedText = decodedText.concat(character);

      } else if (code >= 91 && code <= 96) {
        character = crypt(91 , 6, code, offset)
        decodedText = decodedText.concat(character);

      } else if (code >= 123 && code <= 254) {
        character = crypt(123 , 132, code, offset)
        decodedText = decodedText.concat(character);

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

    function decrypt(maior, tamanho, code, offset){
      let newCode = maior - ((maior - code + offset) % tamanho);
      let newCharacter = String.fromCharCode(newCode);
      return newCharacter
    }

    for (let i = 0; i < string.length; i++) {
    
      let code = string.charCodeAt(i);
      let encodedText = "";

      if (code >= 65 && code <= 90) {
        character = decrypt(90 , 26, code, offset)
        encodedText = encodedText.concat(character);

      } else if (code >= 97 && code <= 122) {
        character = decrypt(122 , 26, code, offset)
        encodedText = encodedText.concat(character);

      } else if (code >= 32 && code <= 64) {
        character = decrypt(64, 33, code, offset)
        encodedText = encodedText.concat(character);
       
      } else if (code >= 91 && code <= 96) {
        character = decrypt(96 , 6, code, offset)
        encodedText = encodedText.concat(character);

      } else if (code >= 123 && code <= 254) {
        character = decrypt(254 , 132, code, offset)
        encodedText = encodedText.concat(character);
      
      } else {
        encodedText = encodedText.concat(string.charAt(i));
      }
    }
    return encodedText
  }
};

export default cipher;

