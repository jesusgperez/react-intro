//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar curso", completed: false },
    { text: "Llorar con la llorona", completed: true },
    { text: "Lalaland", completed: false },
];

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem
                
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = []
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }, 1000)
    }, [])

    const saveItem = (newItem) => {
        try{
            const stringItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringItem)
            setItem(newItem)
        }catch (error) {
            setError(error)
        }
    }

    return {item, saveItem, loading, error}
}

function App(props) {
    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState("");
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

    console.log('holly crap')

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
        <AppUI 
            loading={loading}
            error={error}
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            finishTodo={finishTodo}
            deleteTodo={deleteTodo}
        />
        );
}

export default App;
