import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(){
    const addTask = (msg) => {
        alert(msg)
    } 
    return (
        <button
            className='CreateTodoButton'
            onClick={() => addTask('Se abre el modal')}
        >
            +
        </button>
    )
}

export {CreateTodoButton}