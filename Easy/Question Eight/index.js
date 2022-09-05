// Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.


var heroOne = {
  name: "Ram",
  power: "2500",
  age: "Treata"
}

var heroTwo = {
  name: "Krishna",
  power: "2325",
  age: "Dwapar"
}

var totalPowerHeroOne = (heroOne.power + (heroOne.name.length * 35))
var totalPowerHeroTwo = (heroTwo.power + (heroTwo.name.length * 35))

function checkGreaterHero () {
  if (totalPowerHeroOne > totalPowerHeroTwo) {
    console.log("The more powerful hero is : " + heroOne.name)
  } else {
    console.log("The more powerful hero is : " + heroTwo.name)
  }
}

checkGreaterHero();
