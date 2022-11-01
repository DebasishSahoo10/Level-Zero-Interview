// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c


var userString = "neoGcamp"

var charAt = () => {
  userString = userString.split("")
  console.log(userString[4])
}

charAt()