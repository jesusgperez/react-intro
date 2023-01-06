import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({synchronize}){
    const {storageChange:show, toggleShow} = useStorageListener(synchronize)
    if (show){
        return (
            <div>
                <p>Hubo cambios en el local storage</p>
                <button
                    onClick={()=> toggleShow(false)}
                >
                    Volver a cargar
                </button>
            </div>
        )
    } else {
        return null
    }
    
}

export {ChangeAlert}