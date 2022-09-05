// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or WhatsApp then it will output user saying, "Don't believe things on FB and WhatsApp". Can you extend this to include telegram as well?



var readlineSync = require('readline-sync')

var news = readlineSync.question("input your news here : ")

var newsSource = readlineSync.question("what is your news source? ").toLowerCase()

var checkSource = () => {
  if (newsSource == "fb" || newsSource == "whatsapp") {
    console.log("don't believe things on FB and Whatsapp")
  }
}

checkSource();
