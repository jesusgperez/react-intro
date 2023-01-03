import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    const completedTask = () => {
        alert('Aquí completamos el todo: ' + props.text)
    }
    const deletedTask = () => {
        alert('Aquí borramos el todo: ' + props.text)
    }
    return (
        <li className="TodoItem">   
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={completedTask}
            >
                v
            </span>
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={deletedTask}
            >
                X
            </span>
        </li>
    )
}

export {TodoItem}