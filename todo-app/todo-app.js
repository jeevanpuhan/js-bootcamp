let todos = []

const filters = {
  searchText: '',
  hideCompleted: false,
}
// Check for existing saved data
const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON)
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
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
  localStorage.setItem('todos', JSON.stringify(todos))
  e.target.elements.newTodo.value = ''
  renderTodos(todos, filters)
})

document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
  })
