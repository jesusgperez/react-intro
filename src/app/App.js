//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "Lalaland", completed: false },
];

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
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

  const finishTodo = (text) => {
    const index = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const index = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI 
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
