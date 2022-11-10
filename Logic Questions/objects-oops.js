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

// Print the name of student whose total marks is lowest.

var lowestMarkStudent = (studentData) => {
    var lowestScore = studentData[0].maths + studentData[0].science + studentData[0].english + studentData[0].computer
    var student;
    for(let i=0; i<studentData.length; i++) {
      var totalMark = studentData[i].maths + studentData[i].science + studentData[i].english + studentData[i].computer
      if (totalMark < lowestScore) {
        lowestScore = totalMark
        student = studentData[i].name
      }
    }
    console.log(lowestScore)
    console.log(student)
  }
  
lowestMarkStudent(studentDetails)



// Print the average marks of the class in computer subject.

var averageMarkOfComputer = (studentData) => {
    var averageComputerMark = 0
    for (let i = 0; i < studentData.length; i++) {
      averageComputerMark = averageComputerMark + studentData[i].computer 
    }
    console.log(averageComputerMark)
  }
  
averageMarkOfComputer(studentDetails)


// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.

var gradation = (studentData) => {
    var totalMark = 400
    for(let i=0; i<studentData.length; i++) {
      var totalStudentMark = studentData[i].maths + studentData[i].science + studentData[i].english + studentData[i].computer
      if(totalStudentMark >= (0.75 * totalMark)) {
        studentData[i].grade = "A"
      } else if (totalStudentMark >= (0.60 * totalMark)) {
        studentData[i].grade = "B"
      } else if (totalStudentMark >= (0.35 * totalMark)) {
        studentData[i].grade = "C" 
      } else if (totalStudentMark < (0.35 * totalMark)) {
        studentData[i].grade = "D"
      }
      console.log(`${studentData[i].name} : ${studentData[i].grade}`)
    }
  }
  
gradation(studentDetails)


// Print the total number of students passed and their names. Pass when total marks is greater than 35%


var filterPassedStudents = (studentData) => {
    var totalMark = 400
    var passedStudents = []
    for(let i=0; i<studentData.length; i++) {
      var totalStudentMark = studentData[i].maths + studentData[i].science + studentData[i].english + studentData[i].computer
      if(totalStudentMark > (0.35 * totalMark)) {
        passedStudents.push(studentData[i].name)
      }
    }
    console.log(passedStudents)
  }
  
filterPassedStudents(studentDetails)