/*
Palindrome Checker
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
Return true or false
Must remove all non-alphanumeric characters
Must accept strings with various formats: "racecar" "RaceCar" and "race CAR"
*/

function palindrome(str) {
  // Good luck!
  const regex = /[\W_]/g
  let value = '';
  str = str.replace(regex, '').toLowerCase();
  let arr = str.split('');
  function palinrecursion(arr) {
  if (arr.length >= 2) {
    let first = arr[0];
    let last = arr[arr.length-1]
    if (first === last) {
      arr.shift();
      arr.pop();
      palinrecursion(arr);
    }
    else {
      value = false // if first and last don't match, cannot be palindrome
    }
  }
  else {
      value = true //all elements matched in recursion or there is one single item left
  }
}
  palinrecursion(arr);
  return value;
}

console.log(palindrome("almostomla"));

/*
Solved/passed all FCC tests using recursion on Jul 12 2019. There are definitely cleaner, more efficient methods of doing this.
For instance, I didn't know about the reverse method for arrays. Now I do.
The most efficient one is really neat. It looks at the first and last character and sees if they match the regex. 
If not, it'll increment or decrement the pointer(s) to see if the next character will do the trick. If the pointers
don't point to equal characters, 'false' gets returned right away so the program doesn't needlessly check the rest
of the string. No messing with arrays, just pure stringy goodness. 

https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker/
*/