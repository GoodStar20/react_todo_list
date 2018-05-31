import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { ListGroup } from 'reactstrap'

const TodoList = ({ todos, toggleTodo }) => (
    
    <div className="list-content">
        <ListGroup>
            {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
            )}
        </ListGroup>
    </div>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
