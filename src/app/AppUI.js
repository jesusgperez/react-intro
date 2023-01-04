import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

function AppUI({
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    finishTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                state={searchValue}
                setState={setSearchValue}
            />
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
