import { useState, createContext } from "react";
import { useContext } from "react"

const authContext = createContext()

export function useAuth(){
   return useContext(authContext); 
}
export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState({id:1,name:"bomba"})


    const value ={currentUser}
    return ( <authContext.Provider value={value}>
        {children}
    </authContext.Provider>)
}