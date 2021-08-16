  function pupperAge () {
   // Write a program that takes the user's dog's age and converts it to dog years (multiply by seven).

let dogHumanYears = prompt("What is your dog's age?")
let dogYears = dogHumanYears * 7

dogHumanYears = Number(dogHumanYears)

if (!isNaN(dogHumanYears)) {

  if (dogHumanYears > 0 && dogHumanYears < 150) {

    alert ('The age of your dog in dog years is: ' + dogYears)
    
  } else {
    alert('Error: Invalid age.')
  }
  
} else {
  alert('Error: Bad input.')
}
}




function gstCalculator () {
  // Create a program that takes a price from the user, adds 15% GST, and then outputs the total.

  let ogPrice = prompt("What was the price?") 
  ogPrice = Number(ogPrice)
  let gstPrice = ogPrice * 1.15

if (!isNaN(ogPrice)) {

  if (ogPrice > -1 && ogPrice < 500) {
    alert("The price plus GST is: $" + gstPrice)
    
  } else {
    alert('Error: Invalid Number.')
  }
  
} else {
  alert('Error: Bad input.')
}
}




function lessonsToSeconds () {
    // Create a program that takes a number of lessons (e.g. 3) and outputs how many seconds that is (assume one hour per lesson)

let lesson = prompt('Number of lessons')
let seconds = lesson * 3600
lesson = Number(lesson)


if (!isNaN(lesson)) {

  if (lesson > 0 && lesson < 65) {
    alert('There are ' + seconds + ' Seconds in ' + lesson + ' lessons.')

  } else {
    alert('Error: Invalid lesson number.')
  }
  
} else {
  alert('Error: Bad input.')
}
}




function lifeRemaining () {
    // Create a program that takes a number of lessons (e.g. 3) and outputs how many seconds that is (assume one hour per lesson)

let lesson = prompt('Number of lessons')
let seconds = lesson * 3600
lesson = Number(lesson)


if (!isNaN(lesson)) {

  if (lesson > 0 && lesson < 65) {
    alert('There are ' + seconds + ' Seconds in ' + lesson + ' lessons.')

  } else {
    alert('Error: Invalid lesson number.')
  }
  
} else {
  alert('Error: Bad input.')
}
}

// #####################################
// ###### ----- Pet Register ----- #####
// #####################################

function addPet() {
  let newName = prompt('What should the pets name be?')

  // create the new pet object
  let newPet = {
    name: newName,
  }

  // add the pet object to the register array
  petRegister.push(newPet)
}

function listPets() {
  // loop through the register array and output each pet object
  while
  
}