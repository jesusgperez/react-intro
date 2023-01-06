import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
    const {item:todos, saveItem:saveTodos, loading, error, synchronize} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false)
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (searchValue.length < 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text
        })
        saveTodos(newTodos);
    };

    const finishTodo = (text) => {
        const index = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[index].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const index = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            finishTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            synchronize
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}