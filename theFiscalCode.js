// Each person in Italy has an unique identifying ID code issued by the national tax office
// after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

// Given an object containing the personal data of a person (name, surname, gender and date of birth)
// return the 11 code characters as a string following these steps:

let consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "S",
  "T",
  "V",
  "X",
  "Z",
  "H",
  "R",
  "W",
  "Y",
]
let vowels = ["A", "E", "I", "O", "U"]


let person = {
  name: "Micheal",
  surname: "Diago",
  gender: "Male",
  dateOfBirth: "1/1/1900",
}

//The fucntion That produces the the fiscal Code
function theFiscalCode(person) {
        //return sureName(person) + name(person) + B_G(person)
}

// surename the first part of the fiscal code
// Generate 3 capital letters from the surname, if it has:
// At least 3 consonants then the first three consonants are used. (Newman -> NWM).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
// Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
// function surName(person) {
//         const sNamList = person.toUpperCase()
//         const sNamSplit = sNamList.split('')
//         code = []
//        for(let i = 0; i <= 3; i){
//                 if(consonants.includes(sNamSplit[i])){
                        
//                         code.push(sNamSplit[i])
//                         //i++   
//                 }
//         }
//         return code
// }
// console.log(surName(person.surname))





// name the second part of the fiscal code
// Generate 3 capital letters from the name, if it has:
// Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
// More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
// Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
// Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
function name(person) {}

// birth and gender the last part
// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:
// Take the last two digits of the year of birth (1985 -> 85).
// Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
// For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
// For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
function B_G(person) {
       let twoD = person.findIndex(0, 3)
       console.log(twoD)
}

B_G(person.dateOfBirth)

