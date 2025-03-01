/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  if (reversed === str) {
    console.log( "string is palindrome");
  } else {
    console.log("string is not palindrome"); }
}

isPalindrome("ana");