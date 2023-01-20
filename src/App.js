import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';
import Email from './components/Email';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState({ task: "", deadline: new Date() })
  // const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />

        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todolist 
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}/>
        </div>
        <div>
          <Email />
        </div>
      </div>
    </div>
  );
}

export default App;
