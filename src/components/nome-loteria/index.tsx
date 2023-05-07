import styled from 'styled-components'
import { UseTheme } from "../../hooks"

export function NomeLoteria() {

    const { theme } = UseTheme()

    return (
        <>
            <ImgNomeLoteriaSld src={theme.logo} alt={"Logo " + theme.nome} />
            <NomeLoteriaSld color={theme.loteria}>{theme.nome?.toUpperCase()}</NomeLoteriaSld>
        </>
    )
}


const ImgNomeLoteriaSld = styled.img`

`

const NomeLoteriaSld = styled.h1`
    display: inline-block;
    margin: -3px 10px;
    position: absolute;
    font-weight: bold;
    font-size: 33px;
    color: ${(props) => props.color}
`