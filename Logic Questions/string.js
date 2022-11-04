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