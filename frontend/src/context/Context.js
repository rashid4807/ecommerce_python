import React, {createContext} from "react";
const EcommerceContext = createContext();

const EcommerceProvider = ({children}) => {
    return (
        <EcommerceContext.Provider 
        value={{}}>
            {children}
        </EcommerceContext.Provider>
    )
}
export { EcommerceProvider, EcommerceContext }