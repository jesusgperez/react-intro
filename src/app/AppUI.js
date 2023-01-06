import React from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { Modal } from "../components/Modal"
import { TodoForm } from "../components/TodoForm"
import { TodoHeader } from "../components/TodoHeader";
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert";

function AppUI() {
    const {error, loading,
        searchedTodos, 
        finishTodo, deleteTodo, 
        openModal, setOpenModal, 
        totalTodos, completedTodos,
        searchValue, setSearchValue,
        synchronize
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoHeader loading={loading}>

                <TodoCounter
                    //loading={loading}
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    //loading={loading}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            {/** Render props */}
            <TodoList
                error={error}
                onError={() => <p>Desespérate, hubo un error...</p>}
                loading={loading}
                onLoading={() => <p>Estamos cargando...</p>}
                searchedTodos={searchedTodos}
                onEmptyTodos={() => <p>Crea tu primer todo</p>}
                totalTodos={totalTodos}
                onEmptySearch={() => <p>No hay resultados para {searchValue}</p>}
                render={todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        finished={() => finishTodo(todo.text)}
                        deleted={() => deleteTodo(todo.text)}
                    />
                )}
            >
                    {/* {todo => (
                    <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        finished={() => finishTodo(todo.text)}
                        deleted={() => deleteTodo(todo.text)}
                    />
                )} */}
            </TodoList>

            {/* <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
                {searchedTodos.map()}
            </TodoList> */}

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />

            <ChangeAlertWithStorageListener synchronize={synchronize}/>
        </React.Fragment>
    )
}

export { AppUI };
