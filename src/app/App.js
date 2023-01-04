//import './App.css';
import React from "react";
import { TodoProvider } from "../context/TodoContext";
import { AppUI } from "./AppUI";

const defaultTodos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar curso", completed: false },
    { text: "Llorar con la llorona", completed: true },
    { text: "Lalaland", completed: false },
];



function App(props) {

    
    return (
        <TodoProvider>    
            <AppUI/>
        </TodoProvider>
        );
}

export default App;
