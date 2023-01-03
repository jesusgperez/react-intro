//import './App.css';
import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const defaultTodos = [
    {text:'Cortar cebolla', completed: true},
    {text:'Tomar curso', completed: false},
    {text:'Llorar con la llorona', completed: true},
    {text:'Lalaland', completed: false}
]

function App(props) {
    const [todos, setTodos] = React.useState(defaultTodos)
    const [searchValue, setSearchValue] = React.useState('')
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    let searchedTodos = []

    if (searchValue.length < 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

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
        {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
            />
            ))}
        </TodoList>
        <CreateTodoButton/>
        
    </React.Fragment>
    );
}

export default App;
