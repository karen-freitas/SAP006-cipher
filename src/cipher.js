const cipher = {
  encode : function (offset, string){
    if((typeof offset!=="number")||(typeof string!=="string")){
      throw new TypeError
    }

    let decodedText = "";
    
    for(let i=0; i<string.length; i++){
      let code = string.charCodeAt(i);
      if(code>=65 && code <=90){
        let newCode = ((code-65+offset) % 26) + 65;
        let newCharacter = String.fromCharCode(newCode);
        decodedText = decodedText.concat(newCharacter);

      } else if (code>=97 && code<=122){
        let newCode = ((code-97+offset) % 26) + 97;
        let newCharacter = String.fromCharCode(newCode);
        decodedText = decodedText.concat(newCharacter);

      } else {
        decodedText = decodedText.concat(string.charAt(i));
      }  
    }
  return decodedText


  },

  decode : function (offset, string){
    if((typeof offset!=="number")||(typeof string!=="string")){
      throw new TypeError
    }
    
    let encodedText = "";
    for(let i=0; i<string.length; i++){
      let code = string.charCodeAt(i);
      if(code>=65 && code <=90){

        let newCode = 90-((90-code+offset) % 26);
        let newCharacter = String.fromCharCode(newCode);
        encodedText = encodedText.concat(newCharacter);

      } else if (code>=97 && code<=122){
        let newCode = 122-((122-code+offset) % 26);
        let newCharacter = String.fromCharCode(newCode);
        encodedText = encodedText.concat(newCharacter);

      } else {
        encodedText = encodedText.concat(string.charAt(i));
      }  
    }
    return encodedText

  }
  
};

export default cipher;

