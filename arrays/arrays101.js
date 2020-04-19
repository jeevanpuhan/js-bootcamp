// Empty Array
const emptyArray = []

// Array of numbers
const expenses = [100.10, 45, -20]

// Array of mixed types
const data = [true, 12, 'Andrew']


const names = ['Andrew', 'Jeevan', 'Jason']

// Get the first item
console.log(names[0])

// Get the last item using bracket notation and the length property
console.log(names[names.length - 1])

names.forEach((item, index) => {
    console.log(index)
    console.log(item)
})