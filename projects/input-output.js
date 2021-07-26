function maoriMihi() {
alert('This program will help you build a basic mihi.\n\nMihi (greeting) is an extremely important part of Māori culture. Before speaking in a formal setting (such as a marae) it is expected that you annonuce who you are and where you come from with a mihi. Through a mihi, others can make connections with your pepeha (iwi affiliations to particular natural landmarks) and your whakapapa/genealogy. A mihi has strong spiritual significance as you are speaking on behalf of your tīpuna (ancestors) as well as bringing them along for your kōrero.')
  
  /* Write a program to help the user create a mihi with the following structure:
  Tēnā koutou,
  
  Ko [mountain] te maunga,
  Ko [river/ocean/lake/bay-harbour] te awa/moana/roto/whanga,
  Ko [vessel] te waka,
  Ko [people] te iwi,
  
  Nō [home town] au,
  Ko [name] tōku ingoa,
  
  Tēnā koutou,
  Tēnā koutou,
  Tēnā koutou, katoa.
  */
  
  let name = prompt('What is your full name?')
  let hometown = prompt('What is your home town?')
  let people = prompt('What is your iwi?')
  let vessel = prompt('What is your waka?')
  let river = prompt('What is your river/ocean/lake/bay-harbour?')
  let mountain = prompt('What is your mountain?')
  

  alert('te maunga')
  
  alert('Ko ' + mountain + ' te maunga\n' +
    'Ko ' + river + ' te awa/moana/roto/whanga\n' +
    'Ko ' + vessel + ' te waka\n' +
    'Ko ' + people + 'te iwi')

  alert('Ko ' + hometown + ' au,\n' + 'Ko ' + name + ' tōku ingoa')

  alert('Tēnā koutou,\n' + 'Tēnā koutou,\n' + 'Tēnā koutou, katoa.')
}

function nonMaoriMihi() {
alert('This program will help you build a basic mihi.\n\nMihi (greeting) is an extremely important part of Māori culture. Before speaking in a formal setting (such as a marae) it is expected that you annonuce who you are and where you come from with a mihi. Through a mihi, others can make connections with your pepeha (iwi affiliations to particular natural landmarks) and your whakapapa/genealogy. A mihi has strong spiritual significance as you are speaking on behalf of your tīpuna (ancestors) as well as bringing them along for your kōrero.')
  
  /* Write a program to help the user create a mihi with the following structure:
  Tēnā koutou,
  
  Ko [mountain] te maunga,
  Ko [river/ocean/lake/bay-harbour] te awa/moana/roto/whanga,
  Ko [vessel] te waka,
  Ko [people] te iwi,
  
  Nō [home town] au,
  Ko [name] tōku ingoa,
  
  Tēnā koutou,
  Tēnā koutou,
  Tēnā koutou, katoa.
  */
  
  let name = prompt('What is your full name?')
  let hometown = prompt('What is your home town?')
  let people = prompt('What is your iwi?')
  let vessel = prompt('What is your waka?')
  let river = prompt('What is your river/ocean/lake/bay-harbour?')
  let mountain = prompt('What is your mountain?')
  

  alert('te maunga')
  
  alert('Ko ' + mountain + ' te maunga\n' +
    'Ko ' + river + ' te awa/moana/roto/whanga\n' +
    'Ko ' + vessel + ' te waka\n' +
    'Ko ' + people + 'te iwi')

  alert('Ko ' + hometown + ' au,\n' + 'Ko ' + name + ' tōku ingoa')

  alert('Tēnā koutou,\n' + 'Tēnā koutou,\n' + 'Tēnā koutou, katoa.')
}

function theRepeater() {
 /* Create a program that asks the user for an input, and then outputs it back to them immediately. */

  let said = prompt('Say something random!')
  
  
  if (!variable.includes('')) {
    
    if (said != '') {
      alert(said)
    } else {  
      alert('Error: Invalid Word.')
    }   
   
  } else {
  alert('Error: Bad input.')
}

function madLibs() {
   /* Create a program to ask the user for a series of words, and then output a short story with those words filling the gaps.

  Here is an example:
     "___________! he said ______ as he jumped into his convertible
      exclamation          adverb
  
    ____ and drove off with his _________ wife."
    noun                        adjective
  */

  let exclamation = prompt('Give an exclamation!')
   let adverb = prompt('Give an adverb!')
    let noun = prompt('Give an noun!')
     let adjective = prompt('Give an adjective!')

     alert('"' + exclamation + '! He said ' + adverb + ' as he jumped into his convertible ' + noun + ' and drove off with his ' + adjective + ' wife."')

}

function converstion() {
  let name = 'Mary'
  alert('We want to know if you like programming!')
  alert('Do you like programming ' + name + '?')
  let answer = prompt()
  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}