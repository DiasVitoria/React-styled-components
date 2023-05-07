import { Principal } from "../../components/principal"
import { UseLoteria, UseTheme } from "../../hooks"
import { useEffect } from 'react'
import { timemaniaTheme } from "../../styles/theme"

export function PageTimemania() {
    const { timemania } = UseLoteria()
    const { setTheme } = UseTheme()
  
    useEffect(() => {
      setTheme(timemaniaTheme)
    }, [])

    return <Principal item={timemania}/>
}