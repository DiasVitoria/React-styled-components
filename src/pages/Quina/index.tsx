import { Principal } from "../../components/principal"
import { UseLoteria, UseTheme } from "../../hooks"
import { useEffect } from 'react'
import { quinaTheme } from "../../styles/theme"

export function PageQuina() {
    const { quina } = UseLoteria()
    const { setTheme } = UseTheme()
  
    useEffect(() => {
      setTheme(quinaTheme)
    }, [])

    return <Principal item={quina}/>
}