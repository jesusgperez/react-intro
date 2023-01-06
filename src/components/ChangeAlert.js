import React from "react";
import { withStorageListener } from "./ChangeAlertWithStorageListener";

function ChangeAlert({show, toggleShow}){
    
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}