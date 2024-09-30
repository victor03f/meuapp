import { createContext, useState } from "react";

export const AppContext = createContext()
export const AppProvider = ({children}) =>{
    const [carrinho, SetCarrinho] = useState('')
    const [detail, setDetail] = useState ({})
    const [name, onChangeName] = useState("")

    return(
        <AppContext.Provider value= {{carrinho, SetCarrinho, detail, setDetail, name, onChangeName}}>
        {children}
        </AppContext.Provider>
    )
}