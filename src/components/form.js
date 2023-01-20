import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todos) => 
            todos.id === id ? {title, id, completed} : todos
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() =>{
        if(editTodo){
            // setInput(editTodo.title);
            console.log("we are here")
            setInput((input) => ({ ...input, task: editTodo.title.task }));
            setInput((input) => ({ ...input, deadline: new Date(editTodo.title.deadline)  }));
            console.log("the input is " + typeof input.deadline);
        } else{
            // setInput("");
            setInput((input) => ({ ...input, task: "", deadline: "" }));
         
        }
    }, [setInput, editTodo]);
    const onInputChange = (event) => {
        setInput({
            ...input, [event.target.name] : event.target.value
        });
    };
   const resetForm = () => { 
        document.getElementById("todoForm").reset();
      }
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        if(!editTodo){
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        // resetForm();
        event.target.reset();
        console.log(event.target.name);
        setInput({
            // ...input, [event.target.name] : editTodo.title.value
            task: '', 
            deadline: ''
        });
        }else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
    return (
       <form id="todoForm" onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter a Todo..." className="task-input" 
        value={input.task} required
        onChange={onInputChange} name="task"
        />
        <input type="datetime-local" className="task-input" required onChange={onInputChange} 
        value={input.deadline} name="deadline"/>
        <button className="button-add" type="submit">
        {editTodo ? "OK" : "ADD"}
        </button>
       </form>
    )
}
export default Form;