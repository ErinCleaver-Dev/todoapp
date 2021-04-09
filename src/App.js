import React, { useState} from 'react'
import './App.css';
import ToDoList from './Todo/ToDoList'


function App() {
  const [todos, setTodos] = useState([
    'Takes dogs for a walk',
    'Takes out trash',
    'Programming'

  ]);
  const [input, setInput] = useState('');

  
  

  return (
    <div className="Container">
        <ToDoList todos={todos} 
        input={input} 
        setInput={setInput} 
        setTodos={setTodos}
        />
    </div>
  );
}

export default App;
