// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
console.log(cohort.split(""))

// a) Your answer: 

  // It will log the argument of the console.log() command,
  
  // being, in this case, the data type of the result of the split function, or "array"

// b) Verify and explain: 

  // I was incorrect, console.log() logs the entire resulting object, 
  
  // appearing, in this case, as follows:

  // [
  //   'G', 'o', 'l',
  //   'f', ' ', '2',
  //   '0', '2', '2'
  // ]

  // I now recall the argument of the split function is the chosen delimiter of the individual characters,

  // in this case being chosen as "none", or each individual character has it's own resulting index in the new array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:

  // The code will display the string output of the greeter function,

  // using the passed argument "LEARN Student", to fulfill the parameter called 'name', as follows:

  // Hello, LEARN Student!

// b) Verify and explain:

  // Because the greeter function has no return, the console logged "undefined".

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)

console.log(multipliedByTwo)

// a) Your answer: 

  // The statement to the right of the equal sign indicates to me,

  // that an array is being created and assigned to the variable multipliedByTwo,

  // with values doubled what the initial array show.

  // The console will then log this array, appearing as follows:

  // [8, 10, 12, 14, 16]

// b) Verify and explain:

  // Verified

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:

  // The onlyOdds variable is being used to store an array that is filtered from the one shown,

  // Where the resulting array is only comprised of the values of the initial array,

  // That are not even divisible by two (i.e. odd numbers)

  // The output will appear as follows:
  // [11, 13, 15]

// b) Verify and explain:
  // Actual output verified:
  // [ 11, 13, 15 ]

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:

  // We have an object named myCodingSkills with 4 elements, consisting of:
  // 2 arrays, and two strings.

  // The console log command is using as an argument the zeroeth index of the array "languages"

  // The console will log the actual string value as follows:
  // "JavaScript"

// b) Verify and explain:
  // Verified output:
  // JavaScript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:

// We have a class named Learn with a constructor that takes in a name as an argument,
// and has 3 properties, one of which is set by the argument.

// The variable learnStudent is an object, i.e. a new instance of the Learn class,
// With the string "George" sent as an argument to the constructor

// The console will log the object itself, displaying the property names and their values,
// simply repeating what we can see in the class definition, but including the new student name.

// b) Verify and explain:

// Console output below:
// Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
// I think I nailed it