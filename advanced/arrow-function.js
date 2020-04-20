const square = (num) => num * num

const squareLong = (num) => {
  return num * num
}
console.log(square(5))

const people = [
  {
    name: 'Jeevan',
    age: 20,
  },
  {
    name: 'Andrew',
    age: 27,
  },
  {
    name: 'Jess',
    age: 32,
  },
]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const age20 = people.forEach((person) => {
  if (person.age === 20) console.log(person.name)
})
console.log(age20)

const person = people.find((person) => person.age === 27)
console.log(person.name)
