/*
Roman Numeral Converter
Convert a number to an uppercase Roman numeral.
ex. 2 returns "II", 9 returns "IX", 3999 returns "MMMCMXCIX"
creating arrays/objects, one with roman numerals and one with
decimal equivalent
no more than three of the same consecutive Roman numerals together
*/

function convertToRoman(num) {
    const decimalArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const romanArray = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let strArray = [];
    let counter = 0;
    while (num > 0) {
        if (num >= decimalArray[counter]) {
            num = num-decimalArray[counter];
            strArray.push(romanArray[counter]);
        }
        else {
            counter++;
        }
    } return strArray.join('');
}
   
console.log(convertToRoman(39));

/*
https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter/
The intermediate/advanced solutions have more complex ways of making the roman numeral without having every oddity (4's and 9's) in the array.
*/