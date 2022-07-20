/*
Each person in Italy has an unique identifying ID code issued by the national tax office
after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth)
return the 11 code characters as a string following these steps:

PART 1:
surename the first part of the fiscal code
Generate 3 capital letters from the surname, if it has:
At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).

PART 2:
name the second part of the fiscal code
Generate 3 capital letters from the name, if it has:
Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).

PART 3:
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:
Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
*/

const months = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
}

// let consonants = [
//   "B",
//   "C",
//   "D",
//   "F",
//   "G",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "P",
//   "Q",
//   "S",
//   "T",
//   "V",
//   "X",
//   "Z",
//   "H",
//   "R",
//   "W",
//   "Y",
// ]
let vowels = ["A", "E", "I", "O", "U"]

let person = {
  name: "Matt",
  surname: "Edabit",
  gender: "Male",
  dateOfBirth: "1/1/1900",
}

function threeCaps(p, vowel) {
  let nameArray = p.toUpperCase()
  nameArray.split("")
  caps = []
  vowelHolder = []

  for (let i = 0; caps.length < 3; i++) {
    if (vowel.includes(nameArray[i])) {
      vowelHolder.push(nameArray[i])
    }
    if (!vowel.includes(nameArray[i])) {
      caps.push(nameArray[i])
    } 
  }
  

  return caps.join("")
}
threeCaps(person.name, vowels)

//PART 3 STATUS: DONE
function B_G(p, mon) {
  const d_b = p.dateOfBirth.split("/")
  const theMonth = parseInt(d_b[0])
  let theDay = parseInt(d_b[1])
  const year = d_b[2].slice(2, 5)

  //Part of code
  let month = ""
  for (const x in mon) {
    month = mon[theMonth]
  }

  if (person.gender === "Male") {
    if (theDay < 10) {
      //change to string
      theDay.toString()
      const space = "0"
      theDay = space + theDay
    }
  } else {
    theDay += 40
  }

  return year + month + theDay
}

B_G(person, months)
//The fucntion That produces the the fiscal Code
function theFiscalCode(p, mon, vow) {
  console.log(
    threeCaps(person.surname, vow) +
      threeCaps(person.name, vow) +
      B_G(person, mon)
  )
}

theFiscalCode(person, months, vowels)
