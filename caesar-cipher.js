/*
Caesar Cipher
Write a function using ROT13 string as input and returns a decoded string.
-All letters are uppercase
-Do not transform non-letter characters, but pass them on to output string.

charCodeAt(index) may be useful
String.fromCharCode() too
*/
//"starter" algorithm
function rot13(str) { // LBH QVQ VG!
    let regex = /[A-Z]/g
    /*match everything, transform char code
    arr.map((char)=>char.match(regex).charCodeAt(char))
    */
    let translationArr = [];
    for (var i = 0; i<str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (str[i].match(regex)) {
        if (charCode >= 78) {
          charCode -= 13;
          translationArr.push(String.fromCharCode(charCode));
        }
        else if (charCode < 78) {
          charCode += 13;
          translationArr.push(String.fromCharCode(charCode));
        }
      }
      else {
        translationArr.push(str[i]);
      }
    } 
    return translationArr.join('');
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
