// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers


var userInput = "we are neoGrammers"

var capitaliseFunc = () => {
  userInput = userInput.split(" ")
  for (let i=0; i<userInput.length; i++) {
    userInput[i] = userInput[i][0].toUpperCase() + userInput[i].substring(1)
  }
  userInput = userInput.join(" ")
  console.log(userInput)
}

capitaliseFunc();

// another method using map fucntion

var userInput2 = "we are neoGrammers"

var capitaliseFunc2 = () => {
  userInput = userInput.split(" ")
  userInput.map((word)=> {
    word[0].toUpperCase() + word.substring(1)
  })
  console.log(userInput.join(" "))
}

capitaliseFunc2();