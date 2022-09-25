import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalProvider({children}){

    const [user, setUser] = useState()

    return(
        <GlobalContext.Provider value={{
            user
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider