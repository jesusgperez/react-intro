import React from "react";

function useLocalStorage(itemName, initialValue){
    const [syncItem, setSyncItem] = React.useState(true)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [item, setItem] = React.useState(initialValue);
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem
                
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = []
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem)
                setLoading(false)
                setSyncItem(true)
            } catch (error) {
                setError(error)
            }
        }, 1000)
    }, [syncItem])

    const saveItem = (newItem) => {
        try{
            const stringItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringItem)
            setItem(newItem)
        }catch (error) {
            setError(error)
        }
    }

    const synchronize = () => {
        setLoading(true)
        setSyncItem(false)
    }

    return {item, saveItem, loading, error, synchronize}
}

export {useLocalStorage}