// The following operators are used to set-up conditional logic in javascipt applications.
// ---------------------------------------------------------------------------------------
// === ->   Equality Opearator
// !== ->   Not Equal Operator
// <   ->   less than operator
// >   ->   greater than operator
// <=  ->   less than or equal to operator
// >=  ->   greater than or equal to operator


let temp = 180
let isFreezing = temp <= 32
console.log(isFreezing);

if (temp <= 32 ) {
    console.log('It\'s freezing outside!')
}

if (temp >= 110) {
console.log('It\'s way too hot outside!')
console.log('Lembu pani pia samaste!')
}

// Challenge area
// ---------------------------------------------
// Create age to set your age
// Calculate is child - if they are 7 or under
// Calculate is senior - if they are 65 or older
// Print is child value
// Print is senior value

// let age = 70

// let isChild = age <= 7
// let isSenior = age >= 65

// console.log('Is Child = '+isChild)
// console.log('Is Senior = '+isSenior)

// Challenge #2
// ---------------
// If 7 or under print message about child pricing
// If 65 or older print message about senior discount

let age = 7

if (age<=7) {
console.log('You will get a child discount!')
}

if (age>=65){
    console.log('You will get a senior discount!')
}