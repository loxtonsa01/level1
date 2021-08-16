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
  alert('The subject is ' + subject.name + ', it is in room ' + subject.room + ', and has ' + subject.students + ' students.')
}

function changeSubject() {
  let newName = prompt('What subject should DigiTech change to?')
  let newRoom = prompt('What room is your suject in?')
  let newStudent = prompt('How many students take your subject?')
  subject.name = newName
}

// #####################################
// ####### ----- Find a Pet ----- ######
// #####################################

let petRegister = [
  { name: 'Snuggles', type: 'Cat', color: 'Tabby', age: '3' },
  { name: 'Socks', type: 'Cat', color: 'Black and white', age: '6' },
  { name: 'Snoodle', type: 'Cat', color: 'Brown', age: '8' },
  { name: 'Dogan', type: 'Dog', color: 'Brown', age: '2' },
  { name: 'Bogan', type: 'Dog', color: 'Tabby', age: '10' },
]

function petSearch() {
  let searchType = prompt('what is your pet colour?')
  let searchResult = ''

  petRegister.forEach( (currentPet) => {
    if (currentPet.color == searchType) {
      searchResult += currentPet.name + ', ' + currentPet.type + ', ' + currentPet.color + '. ' 
    }
  })

  alert(searchResult)
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
  
}