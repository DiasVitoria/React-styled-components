import { Principal } from "../../components/principal"
import { UseLoteria, UseTheme } from "../../hooks"

export function Timemania() {
    const { timemania } = UseLoteria()

    return <Principal item={timemania}/>
}