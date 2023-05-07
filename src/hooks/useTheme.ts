import { useContext } from "react";
import { ThemeContext } from "../contexto"

function UseTheme() {
    const context = useContext(ThemeContext)
    return context;
}

export { UseTheme }