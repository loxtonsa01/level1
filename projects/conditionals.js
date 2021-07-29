function moreThan2 () {
  // create a variable called checkNum with the value 10
let checkNum = 10
  // create a variable called numTwo with the value 2
let numTwo = 2
  // check if the number is more than 2
  if (checkNum > numTwo) {
    // if it is, output 'The number is bigger.'
alert('The number is bigger.')
  // otherwise,
  } else {
    // if it's not, output 'The number is smaller.'
alert('The number is smaller.')
  // end if
  }
}



function drivingAge () {
let userAge = prompt('What is your age?')
userAge = Number(userAge)

if (typeof(userAge) == 'number') {

  if (userAge > 0 && userAge < 65) {

    if (userAge > 16) {
      alert('You are old enough to drive!')
    } else {
      alert('You are too young to drive!')
    }
    
  } else {
    alert('Error: Invalid age.')
  }
  
} else {
  alert('Error: Bad input.')
}
}


function calculator () {
  // get the first number
let firstNum = prompt('First number.')
firstNum = Number(firstNum)
  // get the second number
let secondNum = prompt('Second number')
secondNum = Number(secondNum)
  // get the operator
let operator = prompt('What operator?')

  // if the operator is '+'
  if (operator == '+') {
    // output the added result
alert (firstNum + secondNum)
  // otherwise, if the operator is '-'
  } else if (operator == '-') {
    // output the subtracted result
alert (fristNum - secondNum)
  // otherwise, if the operator is '*' 
  } else if (operator == '*') {
    // output the multiplied result
alert (fristNum * secondNum)
  // otherwise,
} else if (operator == '/') {
    // output the divided result
alert (firstNum / secondNum)
  // end if
}
}



function capital () {
  let userName = prompt('What is your name?')
let capitalFrance = prompt(userName + ', what is the capital of France')


if (capitalFrance != 'Paris') {
  alert('That is wrong ' + userName + '.')
  
} else if (capitalFrance == 'Paris') {
  alert('Congratulations ' + userName + '!')

}
}


function conversation() {
  alert('Welcome to my conversation program.')
  alert('Do you like cycling? Answer yes or no.')
  let answer = prompt()
  if (answer == 'Yes') {
    alert("That's good - you will get very fit.")
  } else {
    alert('Perhaps you like some other sport.')
  }
  alert('Goodbye')
}



function mealPlanner() {
  alert('Meal planner.')
  alert('1. Chicken curry.')
  alert('2. Veggie lasagne.')
  alert('3. Burger and salad.')
  alert('Which of these meals is your favourite? (1, 2, or 3).')
  let answer = prompt()
  if (answer == '1') {
    alert('Chicken curry, coming up.')
  } else if (answer == '2') {
    alert('Veggie lasagne, coming up.')
  } else {
    alert('Burger and salad, coming up.')
  }
  alert('Enjoy!')
}