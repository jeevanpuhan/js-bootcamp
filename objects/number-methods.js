// for Documentation - search for MDN number on Google.com
let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge Area
// 1-5 - true if correct - false if not correct

let makeGuess = function(guess){
    let max = 5
    let min = 1
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    return random === guess
    
}

console.log(makeGuess(1))