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
  let index = jobs[Math.floor(Math.random()*jobs.length)]
    //getting the last element in the array
  //jobs[jobs.length - 1];
  // jobs[Math.floor(Math.random()*jobs.length)]

  alert('Your future job will be: ' + index)
}

// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Science',
  'Mathematics',
]

function addSubject() {
  let newSubject = prompt('Pick a subject.')

  // add a new subject to the end of the subjects array
  subjects.push(newSubject)
}

function removeSubject() {
  let index = prompt('What subject should be removed? 0-3')
  
  if (!isNaN(index)) {

  if (index > -1 && index < 4) {

    subjects.splice(index, 1)
    
  } else {
    alert('Error: Invalid number.')
  }
  
} else {
  alert('Error: Bad input.')
}
  
  // remove 1 subject at the index position of the subjects arry
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
  let searchTarget = prompt('What number should be found.')
  let searchResult = false
  
  numberArray.forEach( (currentNumber) => {
    alert(currentNumber)
    // if (currentNumber == searchTarget) {
    //  searchResult = true
    //}
  })
}

// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
}

function showSubject() {
  alert('The subject is ' + subject.name)
}

function changeSubject() {
  let newName = prompt()
  subject.name = newName
}

// #####################################
// ####### ----- Find a Pet ----- ######
// #####################################

let petRegister = [
  { name: 'Snuggles', type: 'cat', color: 'tabby' },
  { name: 'Socks', type: 'cat', color: 'black and white' },
  { name: 'Dogan', type: 'dog', color: 'brown' },
]

function petSearch() {
  let searchType = prompt()
  let searchResult = ''

  petRegister.forEach( (currentPet) => {
    if (currentPet.type == searchType) {
      searchResult += currentPet.name
    }
  })

  alert(searchResult)
}