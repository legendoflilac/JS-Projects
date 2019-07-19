/*
Roman Numeral Converter
Convert a number to an uppercase Roman numeral.
ex. 2 returns "II", 9 returns "IX", 3999 returns "MMMCMXCIX"
creating arrays/objects, one with roman numerals and one with
decimal equivalent
no more than three of the same consecutive Roman numerals together

1,5,10,50,100,500,1000
I,V,X,L,C,D,M

add in 4s and 9s
1,4,5,9,10,40,50,90,100,400,500,900,1000
I,IV,V,IX,X,XL,L,XC,C,CD,D,CM,M

ex. 36
find largest that goes into it, in this case 10
XXX

unless going right to left would be easier?
36
XXXVI
*/

function convertToRoman(num) {
    decimalArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    romanArray = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    //how many thous we got?
    //go into array subtract 1000, add M
    //now have 0 and 3 Ms
    //am I zero? yes, 3 ms
    //600
    //thousands nope
    //900 nope
    //500 away
    //L
    //X
    while (num != 0) {
        if 
    }

    return num;
   }
   
   convertToRoman(36);