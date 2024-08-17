import { createContext, useEffect, useState } from "react"
import axios from 'axios';

let ApiData = createContext()


const ContextApi = ({ children }) => {
    let [info, setInfo] = useState([])

    let getData = () => {
        axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
            setInfo(response.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <ApiData.Provider value={info}>
            {children}
        </ApiData.Provider>
    )
}

export { ContextApi, ApiData }