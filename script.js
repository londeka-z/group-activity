    // Get the input elements
    // Storing the html elements to be manipulated by javascript using a selector and 
    // element id.
const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const subjectInput = document.getElementById("subject")
const cardOutput = document.getElementById("card")


// TODO 1: Create a function called updateCard()
    // This function should:
    // - Get values from all three inputs
    // - If ANY input is empty, show the placeholder message and set class to "empty"
    // - If ALL inputs are filled:
    //   * Show the message: "Hello [name]! You are [age] years old. You love [subject]!"
    //   * If age < 18: set card class to "young"
    //   * If age >= 18: set card class to "adult"

// initial function call

function updateCard() {
      // YOUR CODE HERE
    var name = nameInput.value
    var age = ageInput.value
    var subject = subjectInput.value

    // What conditions should I have  and which operators should I use
    // Logic operators  
    // - != , >= , <= , >, < , Or(||) , ==, ===, AND (&&)

    if(!name || !age || !subject){
      cardOutput.className = "empty"
      cardOutput.textContent = "Fill in the fields above to generate your card ↑"
      return
      
    }
// Standard message 

const message = `Hello ${name}! You are ${age} years old. You love ${subject}!`
cardOutput.textContent = message

 if(age < 18){
   cardOutput.className = "young"

 } else {
    cardOutput.className = "adult"
 }

    }

    // TODO 2: Add event listeners
    // When user types in ANY of the three input fields, the updateCard() function should run
    // Use: addEventListener("input", updateCard)
// nameOfElement.addEventListener("event", functionality)

nameInput.addEventListener("input", updateCard)
ageInput.addEventListener("input", updateCard)
subjectInput.addEventListener("input", updateCard)