import React from 'react';
import './TodoCounter.css';

function TodoCounter({loading, totalTodos:total, completedTodos:completed}){
    return (
        <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}> Has completado {completed} de {total} TODOs</h2>
    )
}

export {TodoCounter}