import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../context/TodoContext';

function TodoSearch(){
    const {searchValue:state, setSearchValue:setState} = React.useContext(TodoContext)
    const searchValueChange = (event) => {
        setState(event.target.value)
    }

    //Send multiple comps
    // return [
    //     <input 
    //         className='TodoSearch'
    //         placeholder="Cebolla"
    //         onChange={searchValueChange}
    //     />,
    //     <p>{state}</p>
    // ]
    return (
        <input 
            className='TodoSearch'
            placeholder="Cebolla"
            onChange={searchValueChange}
        />)
    
}

export {TodoSearch}