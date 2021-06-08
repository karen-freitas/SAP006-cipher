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

      }else if(code>=32 && code<=64){
        let newCode = ((code-32+offset) % 33) + 32;
        let newCharacter = String.fromCharCode(newCode);
        decodedText = decodedText.concat(newCharacter);

      }else if(code>=91 && code<=96){
        let newCode = ((code-91+offset) % 6) + 91;
        let newCharacter = String.fromCharCode(newCode);
        decodedText = decodedText.concat(newCharacter);

      }else if(code>=123 && code<=254){
        let newCode = ((code-123+offset) % 132) + 123;
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
      
        //pontuações, caracteres e números
      }else if(code>=32 && code<=64){
        let newCode = 64-((64-code+offset) % 33);
        let newCharacter = String.fromCharCode(newCode);
        encodedText = encodedText.concat(newCharacter);

      //acentos, crase e outros caracteres

      }else if(code>=91 && code<=96){
        let newCode = 96-((96-code+offset) % 6);
        let newCharacter = String.fromCharCode(newCode);
        encodedText = encodedText.concat(newCharacter);

      }else if(code>=123 && code<=254){
        let newCode = 254-((254-code+offset) % 132);
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

