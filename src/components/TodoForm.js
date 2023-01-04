import React from "react";
import { TodoContext } from "../context/TodoContext";
import './TodoForm.css'

function TodoForm(){
    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const cancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const submit = (event) => {
        //Prevents the page reload when the form is submitted
        event.preventDefault()
        addTodo(newTodoValue)
        setNewTodoValue('')
        setOpenModal(false)
    }
    return (
        <form onSubmit={submit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                placeholder="Cortar cebolla"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={cancel}
                    >
                    Cancelar
                </button>
                <button 
                    className="TodoForm-button TodoForm-button--add"
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}