import React from "react";

function useStorageListener(synchronize){
    const [storageChange, setStorageChange] = React.useState(false)
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1'){
            console.log('Hubo cambios en el local Storage')
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        debugger
        synchronize()
        setStorageChange(false)
    }

    return {storageChange, toggleShow}

}

export {useStorageListener}