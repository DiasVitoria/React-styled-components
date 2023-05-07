import { createContext, useState } from "react";
import { Theme, ThemeProps } from "../types";

const ThemeContext = createContext({} as ThemeProps);

function ThemeProvider({ children }:any) {

    const [theme,setTheme] = useState({} as Theme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider }