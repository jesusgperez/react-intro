import React from "react";

function TodoHeader({children, loading}){
    //Compartir una o más propiedades a uno o más hijos de un componente de react
    return (
        <header>
            {React.Children
            .toArray(children)
            .map(child => React.cloneElement(child, {loading}))}
        </header>
    )
}

export {TodoHeader}