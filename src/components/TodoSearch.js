import React from 'react';
import './TodoSearch.css'

function TodoSearch({state, setState}){
    //const [state, setState] = React.useState('')

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