/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
/* eslint-disable no-cond-assign */
export function Acumulou(props: any){

    const loteria = props.item
    function Ganhadores() {
        var ganhador = ''

        if (loteria.quantidadeGanhadores > 0) {
            return ganhador = ((loteria.quantidadeGanhadores = 1) ? loteria.quantidadeGanhadores + " GANHADOR" : loteria.quantidadeGanhadores + " GANHADORES")
        }else{
            return ganhador = "ACUMULOU!"
        }
    }
    
    return <AcumulouSld>{Ganhadores()}</AcumulouSld>
}

const AcumulouSld = styled.h1`
    margin: 20px 0 0 55px;
    color: #0066b3;
    font-weight: bold;
    font-size: 30px;
`