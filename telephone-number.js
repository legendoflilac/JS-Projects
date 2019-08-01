/*
Telephone Number Vaidator
Return true if a string fits the patterns for a US phone number.
ex.
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {
    let regex = /^(1\s|1)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/g
    return regex.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
/*below is left over from the first regex I tried
regex = /^(1 |)(\(|)(\d{3})(-| |\)|\) |)(\d{3})(-| |)(\d{4})/gm
key things learned:
*? - can be used after a character or capture group to indicate a char/group is optional
*capture groups are very important
*use /s instead of whitespace characters for readability
According to forum posts both solutions in the guide are insufficient, so they won't be linked.
*/