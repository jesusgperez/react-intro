import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const addTask = () => {
        props.setOpenModal(prevState => !prevState)
    } 
    return (
        <button
            className='CreateTodoButton'
            onClick={addTask}
        >
            +
        </button>
    )
}

export {CreateTodoButton}