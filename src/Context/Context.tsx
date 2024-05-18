'use client'
import { useContext, createContext, useState } from "react";
//Creating Context wrapping in our app, exporting our Custom Hook
//Definte Context

interface IContextValue {
    pageTwoName: string
    setPageTwoName: (pageTwoName: string) => void
}

//{} as IContextValue is just giving placeholder values
export const Context = createContext<IContextValue>({} as IContextValue);

//wrapp our layout.tsx so we have to pass in the children of our app, (Cpoying layout parameteres in layout.tsx)
export const AppWrapper = ({children,}: Readonly<{children: React.ReactNode;}>) =>{
    const [pageTwoName, setPageTwoName] = useState<string>(''); //our entire app will be able to access this UseState
    return(
        <Context.Provider value={{pageTwoName, setPageTwoName}}>
        {children}
        </Context.Provider>
    )
}
//function that gives us access to our values
export const useAppContext = () =>{
    return useContext(Context);
}