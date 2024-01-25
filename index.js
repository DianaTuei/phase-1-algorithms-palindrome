function isPalindrome(word) {
  // Write your algorithm here
  // input - word
  // output - true or false

  // first convert word to lowercase
  let smallLettersWord = word.toLowerCase()

  // remove non alphabetic characters
  smallLettersWord = smallLettersWord.replace(/[^a-z]/g, '')

  // compare lower case word with its reverse
  if( smallLettersWord === smallLettersWord.split('').reverse().join('')){
    return true
  } else {
    return false
  }
  
}

isPalindrome('abba')
console.log(isPalindrome('abba'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('a'))
console.log(isPalindrome('robot'))
console.log(isPalindrome('ab'))

/* 
  Add your pseudocode here
*/
// pseudocode
// declare a variable
// make the variable split
// then iterate through each word to ensure the letters are the same, that is first and last, second and second last

// then return this function with a word
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
