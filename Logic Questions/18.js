// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021



var dateOne = '02/05/2021'
var dateTwo = '24/01/2021'

var minDate = () => {
  dateOne = dateOne.split("/")
  dateTwo = dateTwo.split("/")
  if (dateOne[2] == dateTwo[2]) {
      if (dateOne[1] == dateTwo[1]) {
        if (dateOne[0] == dateTwo[0]) {
          console.log("both the dates are same")
        } else if (dataOne[0] > dataTwo[0]) {
          console.log("the second date comes before the first date")
        } else {
          console.log("the first date comes before the second date")
        }
      } else if (dateOne[1] > dateTwo[1]) {
        console.log("the second date comes before the first date")
      } else {
        console.log("the first date comes before the second date")
      }
    } else if (dateOne[2] > dateTwo[2]) {
      console.log("the second date comes before the first date")
    } else {
      console.log("the first date comes before the second date")
    }
}

minDate()