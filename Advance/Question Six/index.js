var readlineSync = require('readline-sync');

var studentDatabase = []

for (let i = 0; i < 2; i++) {
  var markDatabase = {
    name: readlineSync.question("What is your name? "),
    unitTestMarks: Number(readlineSync.question("What is your unit test mark? ")),
    preFinalMarks: Number(readlineSync.question("What is your pre final marks? ")),
    finalMarks: Number(readlineSync.question("What is your final marks? ")),
    totalMarks: function() {
      return this.unitTestMarks + this.preFinalMarks + this.finalMarks
    }
  }
  console.log("------------------------------");
  studentDatabase.push(markDatabase)
}

var topper = "";
var highestMark = 0;

for (let i = 0; i < studentDatabase.length; i++) {
  if (studentDatabase[i].totalMarks() > highestMark) {
    highestMark = studentDatabase[i].totalMarks()
    topper = studentDatabase[i].name
  }
}

for (let i = 0; i < studentDatabase.length; i++) {
  var average = Number(studentDatabase[i].totalMarks() / 3)
  console.log(`Average mark of ${studentDatabase[i].name} : ${average}`)
}

console.log("------------------------------")
console.log("Highest total mark is : " + highestMark);
console.log("And the one who scored it is : " + topper);
