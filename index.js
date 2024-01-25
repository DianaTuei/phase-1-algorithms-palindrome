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
/* pseudocode
make word be in lowercase
then ensure there are no non alphabetic words or characters
create an if statement to compare the word to its reverse and return true or false accordingly
*/

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
