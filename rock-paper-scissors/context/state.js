import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [myChoice, setMyChoice] = useState("");
    const [score, setScore] = useState(0);

    let sharedState = {
        myChoice,
        setMyChoice,
        score,
        setScore,
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
