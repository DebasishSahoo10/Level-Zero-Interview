const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
]



// Print the name and total marks of each student.

var getNameAndMarks = (studentData) => {
  for (let i=0; i<studentData.length; i++) {
    var totalMark = studentData[i].maths + studentData[i].science + studentData[i].english + studentData[i].computer
    console.log(`${studentData[i].name} : ${totalMark}`)
  }
}

getNameAndMarks(studentDetails)


// Print the name of student whose total marks is highest

var highestMarkStudent = (studentData) => {
    var highScore = 0
    var student;
    for(let i=0; i<studentData.length; i++) {
      var totalMark = studentData[i].maths + studentData[i].science + studentData[i].english + studentData[i].computer
      if (totalMark > highScore) {
        highScore = totalMark
        student = studentData[i].name
      }
    }
    console.log(highScore)
    console.log(student)
  }
  
  highestMarkStudent(studentDetails)