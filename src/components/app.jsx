import React, { PropTypes } from 'react'
import Todo from './todo.jsx'

<<<<<<< HEAD:src/components/app.jsx
export default class App extends React.Component {
  render(){
    return(
      <div> hello world </div>
        )
  }
=======
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
>>>>>>> master:src/components/todo-list.jsx
}

export default TodoList
