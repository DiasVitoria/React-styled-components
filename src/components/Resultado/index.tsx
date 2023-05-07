import styled from 'styled-components'
import { UseTheme } from "../../hooks"

export function Resultados(props: any){

    const loteria = props.item
    const { theme } = UseTheme()

    return (
        <ContainerResultadosSld>
            {loteria.dezenas.map((item: any) => (
                <BolaResultadoSld key={item} color={theme.bola}>
                    <NumeroResultadosSld color={theme.bolafonte}>{item}</NumeroResultadosSld>
                </BolaResultadoSld>
            ))}
        </ContainerResultadosSld>
    )
}


const ContainerResultadosSld = styled.div`
    display: flex;
    margin-left: 30px;
`

const BolaResultadoSld = styled.div`
    padding: 13px 14px 13px 13px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    margin: 28px 0px 0 24px;
    background-color: ${(props) => props.color}
`

const NumeroResultadosSld = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.color}
`