import React from "react";
import './Input.css';

function Input({todos,updateTitle,addInput,onDelete,inputNumber}){
    return(
        <div className = "FormContainer">
            {
                // Map in each todo
                todos.map((todo) => {
                   return(
                    <div className = "list_line" key = {todo.id}>
                        <div className = "list_count">
                            {inputNumber++}
                        </div>
                        <div className="input_line">
                        <input 
                        value = {todo.title}
                        onChange = {(e) => {
                            updateTitle({
                                ...todo,
                                title:e.target.value,
                            })
                            if(e.target.value.length === 0){
                                onDelete(todo);
                                }
                            }
                        }
                        // onKey press Add new input
                        onKeyPress = {()=>{
                                if(todo.title === ""){
                                    addInput();
                                }
                            }} 
                        />
                    </div>
                    </div>
                   )})}
        </div>
)}
export default Input;