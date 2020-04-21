const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false,
}

renderTodos(todos, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  if (e.target.elements.newTodo.value !== '') {
    todos.push({
      text: e.target.elements.newTodo.value,
      completed: false,
    })
    saveTodos(todos)
    e.target.elements.newTodo.value = ''
    renderTodos(todos, filters)
  }
})

document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
  })
