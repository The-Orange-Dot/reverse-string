function reverseString(str) {
  reversed = "";
  // console.log(str[str.length - 1]);

  for (let i = str.length - 1; i > -1; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  reverseString("test");

  reverseString("hi");

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*
- Locate the end of the word, regardless of length.
- Iterate to console.log each letter of the word
- Add each letter to an empty container and return the container as a string
*/
// And a written explanation of your solution
/*
- Due to the varying lengths of the expected results, an iteration was required starting from the back.
- Looking for last letter: I console.log the string.length and it comes out to 4 on my test word ("test").
- Putting it in str[str.length] it was too high due to 0 indexing so I added -1. str[str.length -1]
- Now that the last letter was found, I needed to iterate it with a for loop. i needed to be str[str.length -1]
- We should be subtracting by 1 for ever iteration, and once i reaches 0, it should stop.
- The numbers should be added one by one to an empty container and returned
*/
