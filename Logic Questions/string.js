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