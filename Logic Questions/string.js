// Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence. ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

var removeString = (string, n) => {
    var array = string.split(" ")
    for (let i=0; i<array.length; i++) {
      if (array[i] == n) {
        var index = array.indexOf(n)
        array.splice(index, 1)
      }
    }
    console.log(array.join(" "))
  }
  
removeString("programming camp are amazing for programming", "programming")




// Write a program to toggle case of each character of the string "good afternoon" (example: "neogcamp" ⇒ "nEoGcAmP" )

var toggleCase = (string) => {
    var array = string.split("")
    for(let i=1; i<array.length; i=i+2) {
      if (array[i] == array[i].toUpperCase()) {
        array[i] = array[i].toLowerCase()
      } else {
        array[i] = array[i].toUpperCase()
      }
    }
    console.log(array.join(""))
  }
  
toggleCase("neogcamp")



// A program that counts the value of each character and prints the most repeated character?

var getRepetitionChar = (n) => {
  var charValues = {}
  var maxKey = ''
  for(let i=0; i<n.length; i++) {
    var key = n[i]
    if(!charValues[key]) {
      charValues[key] = 0  
    }
    charValues[key] = charValues[key]+1
    if (maxKey == '' || charValues[key] > charValues[maxKey]) {
      maxKey = key
    }  
  }
  console.log(maxKey)
}

getRepetitionChar("accessibility")



// Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome


var reverseSentence = (string) => {
  string = string.split(" ").reverse().join(" ")
  console.log(string)
}

reverseSentence("Welcome to NeoG Camp")


// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

var removeSpaces = (string) => {
  string = string.split(" ").join("")
  console.log(string)
}

removeSpaces("Welcome to NeoG Camp")


// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string


var replaceWord = (string, c1, c2) => {
  string = string.split(" ")
  for(let i=0; i<string.length; i++) {
    if(string[i] == c1) {
      string[i] = c2
    }
  }
  console.log(string.join(" "))
}

replaceWord("Welcome to any Camp any", "any", "NeoG")



// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

var partialUpperCase = (string) => {
  var noSpaceString = string.split("")
  var n = 6
  for (let i=0; i<n; i++) {
    if (noSpaceString[i] == " ") {
      n = n + 1
    } else {
      noSpaceString[i] = noSpaceString[i].toUpperCase()
    }
  }
  console.log(noSpaceString.join(""))
}

partialUpperCase("tic tac toe is a fun game")