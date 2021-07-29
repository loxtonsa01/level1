function counting () {
  let number = 1
while (number <= 10){
  alert (number)
  number +=1
}
}



function squareSeries () {
  //Create a program that asks the user for a number and outputs the square series up to that number, e.g. for 5, the series is '1, 4, 9, 16, 25'.

let numberEnd = prompt('Give me an End Number.')

// start a new variable with no text to store the whole series
let outputSeries = ''
// start a new variable at 1 to store the number to square
let squaredNum = 1
// while the number to square is less than or equal to what the user put in:
while (squaredNum <= numberEnd) {
  // square the number to square and append it to the whole series
outputSeries += squaredNum **2

outputSeries +=', '
  // add 1 to the number to square
squaredNum += 1
// end loop
}
// output the whole series
alert('Square series of ' + numberEnd + ' is ' + outputSeries)

}




function factorial () {
    // Create a program that asks the user for a number and then outputs the factorial of it.
  // Factorial is all the numbers lower than that number multiplied, e.g. 5! = 5 x 4 x 3 x 2 x 1
  let userNumber = prompt('Pick a number to be multiplied!')
  // Start a new variable to store the result
  let factorialResult = userNumber
  // start a new variable 
  let nextMultiplier = userNumber -1
  // while the next multiplied gets to 1 it ends
  while (nextMultiplier >= 1) {
    
    factorialResult = factorialResult * nextMultiplier
    
    nextMultiplier += -1
    // end loop
  }
  // output hopefully the correct thing
  alert('The answer is ' + factorialResult + '!')
}



function fibonacci () {
  // Create a script that asks the user for a number and then outputs the Fibonacci sequence up to that number, e.g if the user input '20' then the output would be '0, 1, 1, 2, 3, 5, 8, 13'.

let finishNum = prompt('Give me a number to get a Fibonacci sequence.')

let outputSeries = ''

let currentNum = 1

let prevNum = 1

while(currentNum <= finishNum) {
  
  currentNum = currentNum + prevNum
  
  prevNum = currentNum - prevNum
  
  outputSeries +=', ' + currentNum
  
}

alert('1, 1' + outputSeries)
}