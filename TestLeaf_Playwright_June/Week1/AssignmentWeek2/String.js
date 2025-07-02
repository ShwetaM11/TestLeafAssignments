function reverseString(input) {
  const reversed = input.split("").reverse().join(""); 
  console.log("Reversed String:", reversed);
  return reversed;
}

function isPalindrome(original) {
  const reversed = reverseString(original);
  return original === reversed;
}

let Str1 = "racecar";
let Str2 = "Shweta";

console.log(`Is "${Str1}" a palindrome?`,isPalindrome(Str1));
console.log(`Is "${Str2}" a palindrome?`,isPalindrome(Str2));
