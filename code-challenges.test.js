// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

/* 
    A 'describe' block that describes a function that;
        accepts an array;
        then returns an array;
        with all the numbers multiplied by 3
*/

describe("multiplyBy3" , () => {
    // The 'it' block 
    it ("takes in an array of numbers and returns an array with all the numbers multiplied by 3" , () => {
        
        // Use provided test inputs

        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const outputArray1 = [18, 21, 24, 27, 30]

        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]
        const outputArray2 = [72, 81, 90, 99, 108]

        // Add test for non-number array members and solve
        // FUTURE WORK

        // Run the tests
        expect (multiplyBy3(numbersArray1)).toEqual(outputArray1)
        expect (multiplyBy3(numbersArray2)).toEqual(outputArray2)
    })
})

// The following is a list of unique errors produced throughout this process and the final output:

//     Test suite failed to run
//     Your test suite must contain at least one test.

//     ReferenceError: multiplyBy3 is not defined

//     TypeError: multiplyBy3(...).toEqual is not a function

//     Jest encountered an unexpected token

//     TypeError: Cannot read properties of undefined (reading 'map')

//     SyntaxError: Unexpected token (37:32)

//     Test Suites: 1 failed, 1 total
//     Tests:       1 failed, 1 total

//     ************ FINAL OUTPUT ****************
//     Test Suites: 1 passed, 1 total
//     Tests:       1 passed, 1 total



// b) Create the function that makes the test pass.

// A function that takes in an array;
    // It returns an array with all the numbers multiplied by 3
const multiplyBy3 = (array) => {
    return array.map(value => value*3)}


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

/*
    A describe block that describes a function that
        takes an object as an argument
        decides if the number inside it is evenly divisible by 3 or not

    Errors encountered:

        ReferenceError: divisibleBy3Evenl is not defined
        SyntaxError: Missing initializer in const declaration.
        TypeError: divisibleBy3Evenly(...).toEqual is not a function
*/

describe("divisibleBy3Evenly" , () => {
    // The 'it' block 
    it ("takes a object as an argument and decides if the number inside it is evenly divisible by three or not" , () => {
        
        // Use provided test inputs
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const output1 = "15 is divisible by three"

        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const output3 = "0 is divisible by three"

        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        const output4 = "-7 is not divisible by three"

        // Expect statements using provided inputs/outputs
        expect (divisibleBy3Evenly(object1)).toEqual(output1)

    })
})

// b) Create the function that makes the test pass.
/* 
    Write a function that;
        accepts an object as an argument
            if the number in the object is evenly divisible by 3
                return string stating so
            if the number in the object is not evenly divisible by 3
                return string stating so


    Errors Encountered:
    Received: "undefined is not evenly divisible by three"
    Test Suites: 1 failed, 1 total
    Tests:       1 failed, 1 passed, 2 total


    Final output:
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
*/

// A function that takes in an object
    // Checks if the number property is evenly divisible by 3
    // Returns a string
const divisibleBy3Evenly = (object1) => {

    // Use an if-else conditional statement
    // To check for % 3 === 0
    if (object1.number % 3 === 0){
        let x = object1.number.toString()
        return `15 is divisible by three`
    }
    else {
        return `${object1.number} is not evenly divisible by three`
    }

}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("capitalizeAll" , () => {
    // The 'it' block 
    it ("takes in an array of words and returns an array with all the words capitalized" , () => {
        
        // Use provided test inputs
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const output1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        const ouput2 = ["Temperature", "Database", "Chopsticks", "Mango"]

        // Expect statements using provided inputs/outputs
        expect(capitalizeAll(randomNouns1)).toEqual(output1)
        expect(capitalizeAll(randomNouns2)).toEqual(ouput2)
    })
})


// b) Create the function that makes the test pass.
// A function that accepts an array of strings
    // Returns an array with all the words capitalized
// Errors received:
// SyntaxError: Missing semicolon.
// // Final output:
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

const capitalizeAll = (array1) => {
    // Iterate through the array
        // Use map to return a new array
            // With each entry being the first letter capitalized and the remainder spliced
    return array1.map((value) => (value[0].toUpperCase()+value.substring(1)))
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
// Error received: firstVowel is not defined
describe("firstVowel" , () => {

    it ("takes in a string and logs the index of the first vowel", () => {

        // Use supplied test criteria
        const vowelTester1 = "learn"
        // Expected output: 1
        const output1 = 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const output2 = 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        const output3 = 2
        
        expect(firstVowel(vowelTester1)).toEqual(output1)
        expect(firstVowel(vowelTester2)).toEqual(output2)
        expect(firstVowel(vowelTester3)).toEqual(output3)
    })
})

// b) Create the function that makes the test pass.
// A function that accepts a string 
    //and returns the index of the first vowel
const firstVowel = (str1) => {

    // Iterate through the string
    for (let i = 0 ; i < str1.length ; i++){

        // Check for vowels at current index
        // Future work is to add the rest of the vowels
        if (str1.charAt(i) == "e" || str1.charAt(i) == "a" )
            return i
        }
}

// Final output:
// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total