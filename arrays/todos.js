// When we pass a function to a function, this is called CALLBACK FUNCTION.
const todos = [{
    text: 'walk the dog',
    completed: true
 }, {
     text: 'Eat burger',
     completed: false
}, {
    text: 'Play football',
    completed: true
 }, {
     text: 'call anki',
     completed: false
  }, {
    text: 'Make a sticker',
    completed: true
}]

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const deleteTodo = function(todo, title) {
    const index = todo.findIndex(function(todo) {
        return todo.text.toLowerCase() === title.toLowerCase()
    })
    if (index > -1) {
        todo.splice(index, 1)
    }
}

const getThingsToDo = function(todo) {
    return todo.filter(function(todo) {
        return !todo.completed
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
            if (!a.completed && b.completed) {
                return -1
            }
            else if (a.completed && !b.completed) {
                return 1
            }
            else {
                return 0
            }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'call anki')
// console.log(todos)
