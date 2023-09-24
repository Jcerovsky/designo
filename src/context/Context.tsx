import React, {createContext, ReactNode, useEffect} from 'react';
import {useObjectState} from "@/hooks/useObjectState";

interface IContext {
    theme: string,
    setState: (newState: Partial<IContext>) => void,
}

export const Context = createContext<IContext | null>(null)

const getLocalStorageItem = (key: string, defaultValue: any) => {
    if (typeof window !== "undefined") {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    }
    return defaultValue;
};

function ContextProvider({children} : {children: ReactNode}) {

    const [state, setState] = useObjectState<IContext>({
        theme: getLocalStorageItem("theme", "light"),
        setState: () => {},
    })

    useEffect(() => {
        if (state.theme === "light") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", JSON.stringify(state.theme));
        }
    }, [state.theme]);

    return (
        <Context.Provider value={{theme: state.theme, setState}}>
            {children}
        </Context.Provider>
    );
}

export default Context;