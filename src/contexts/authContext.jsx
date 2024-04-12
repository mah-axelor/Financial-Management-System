import { useState, createContext } from "react";
import { useContext } from "react"

const authContext = createContext()

export function useAuth(){
   return useContext(authContext); 
}
export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const value ={currentUser, isLoggedIn}
    return ( <authContext.Provider value={value}>
        {children}
    </authContext.Provider>)
}