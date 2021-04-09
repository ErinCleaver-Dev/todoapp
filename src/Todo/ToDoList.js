import React from 'react';
import './todolist.css';
import Button from '@material-ui/core/Button';

const ToDoList = ({todos, input, setInput, setTodos}) => {
    const addToDo = (event)  => {
        event.preventDefault();
        setTodos([...todos, input]);
        setInput('');
    }
    

    
    return (
        <div className="TodoList">
          <h1>To Do List</h1>
          <form>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <Button disabled={!input} size="small" type="submit"  variant="contained" color="primary"  onClick={addToDo}>
                 Add Todo
            </Button>
          </form>
          <ul>
            {
            todos.map(todo => (
              <li>{todo}</li>
            ))
            }
          </ul>
      </div>

    );

}

export default ToDoList