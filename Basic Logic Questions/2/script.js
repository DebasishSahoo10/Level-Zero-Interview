// get all the keys of a object having same values and then put both the keys and the values in a new object.

var obj = {
    name1: "India",
    name2: "SriLanka",
    name3: "asia",
    name4: "India",
    name5: "India"
  }
  
  
  var newObj = {}
  
  for (let keys in obj) {
    if (obj[keys] == "India") {
      newObj[keys] = obj[keys]
    }
  }
  
  console.log(newObj)