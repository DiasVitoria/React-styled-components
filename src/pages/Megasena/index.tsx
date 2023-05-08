import { Principal } from "../../components/principal"
import { UseLoteria, UseTheme } from "../../hooks"

export function Megasena() {
    const { megasena } = UseLoteria()

    return <Principal item={megasena}/>
}