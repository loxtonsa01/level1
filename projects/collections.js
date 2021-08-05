// ##################################
// ##### ----- Future Job ----- #####
// ##################################

const jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'judge',
  'scientist',
  'software engineer',
]

function futureJob() {
  let index = 0
    //getting the last element in the array
  //let lastElement = jobs[jobs.length - 1]
  let randomElement = jobs[Math.floor(Math.random()*jobs.length)]

  alert('Your future job will be: ' + randomElement)
}

// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Science',
  'Mathematics'
]

function addSubject() {
  let newSubject = prompt('Pick a subject.')

  // add a new subject to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = subjects[subjects.length - 1]

  // remove 1 subject at the index position of the subjects array
  subjects.splice(index, 1)
}

// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
]

function numberSearch() {
  let searchTarget = 1
  let searchResult = false
  
  numberArray.forEach( (currentNumber) => {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  })
}