import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

function AppUI() {
    const {error, loading, searchedTodos, finishTodo, deleteTodo} = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        finished={() => finishTodo(todo.text)}
                        deleted={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>
    )
}

export { AppUI };
