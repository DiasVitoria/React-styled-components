import { Principal } from "../../components/principal"
import { UseLoteria, UseTheme } from "../../hooks"
import { useEffect } from 'react'
import { megasenaTheme } from "../../styles/theme"

export function PageMegasena() {
    const { megasena } = UseLoteria()
    const { setTheme } = UseTheme()
  
    useEffect(() => {
      setTheme(megasenaTheme)
    }, [])

    return <Principal item={megasena}/>
}