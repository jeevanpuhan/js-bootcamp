const todos = [
  {
    text: 'walk the dog',
    completed: true,
  },
  {
    text: 'Eat burger',
    completed: false,
  },
  {
    text: 'Play football',
    completed: true,
  },
  {
    text: 'call anki',
    completed: false,
  },
  {
    text: 'Make a sticker',
    completed: true,
  },
]

const filters = {
  searchText: '',
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('div.todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left.`
  document.querySelector('div.todos').appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('div.todos').appendChild(todoEl)
  })
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()

  todos.push({
    text: e.target.elements.newTodo.value,
    completed: false,
  })

  e.target.elements.newTodo.value = ''
  renderTodos(todos, filters)
})