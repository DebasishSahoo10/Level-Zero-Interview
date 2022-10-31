// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen


var sentence = "we are neoGrammers"


var reverseCharactersOfWord = () => {
  sentence = sentence.split(" ")
  for(let i=0; i<sentence.length; i++) {
    sentence [i] = sentence[i].split("").reverse("").join("")
  }
  console.log(sentence.join(" "))
}


reverseCharactersOfWord()