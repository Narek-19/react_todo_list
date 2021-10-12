import React from "react";
import './FormContainer.css';
import { useState } from "react";
import Input from "../Input/Input";

function FormContainer({title}){
    const [todos, setTodos] = useState([
        {
            id:Math.random(),
            title:"",
        }
    ])
    // -----FUNCTIONS-------

    // Update input title in every change
    const updateTitle = (newTitle)=> {
        setTodos(todos .map((todo)=>{
            if(todo.id === newTitle.id){
                return newTitle;
            }
        return todo;
    }));
    }
    // Add new input in array
    const addInput = ()=>{
    setTodos([
        ...todos,
        {
            id:Math.random(),
            title:""
        }
    ])}
    // Delete current input when current title length is 0
    const onDelete = (todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
    }

    // Counter For inputs
    let inputNumber = 1;
    return(
            <div className = "Form">
                <h1>{title}</h1>
                <div className = "inputList">
                    <Input
                        todos = {todos}
                        updateTitle = {updateTitle}
                        addInput = {addInput}
                        onDelete = {onDelete}
                        inputNumber = {inputNumber}
                    />
                </div>
                
            </div>
        )
}
export default FormContainer;