let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)
myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)
console.log()
// Challenge Area

// name, age, location

// Jeevan is 19 and lives in Bhubaneswar.
// Increase age by 1 and print message again.

let person = {
    name: 'Jeevan',
    age: 19,
    location: 'Bhubaneswar'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age += 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)