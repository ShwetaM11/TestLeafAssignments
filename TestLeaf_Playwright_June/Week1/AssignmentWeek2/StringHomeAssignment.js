//Example 1
function lengthOfWord(string) {
  
  string = string.trim();
  const words = string.split(" ");

  //Identify the last word
  const lastWord = words[words.length - 1];
  return lastWord.length;
}

console.log("Length of last word is",lengthOfWord("Hello World"));             
console.log("Length of last word is",lengthOfWord("fly me to the moon "));  
console.log("Length of last word is",lengthOfWord("Shweta Mehta"));

//Example 2
function Anagram(str1, str2) {
 
  const s1 = str1.replace(/\s+/g, '').toLowerCase();
  const s2 = str2.replace(/\s+/g, '').toLowerCase();

  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log("Is this string Anagram?", Anagram("listen", "silent"));   
console.log("Is this string Anagram?",Anagram("hello", "world"));     