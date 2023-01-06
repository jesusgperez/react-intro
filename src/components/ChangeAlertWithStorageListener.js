import React from "react";

function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1'){
                console.log('Hubo cambios en el local Storage')
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            setStorageChange(false)
            props.synchronize()
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export {withStorageListener}