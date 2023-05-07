import styled from "styled-components";
import { Acumulou } from "../acumulou"
import { Data } from "../data"
import { Resultados } from "../resultado"

export function Direita(props: any){
    
    const loteria = props.item

    return (
        <ContainerDireitaSld>
            <Resultados item={loteria}/>
            <Acumulou item={loteria}/>
            <Data item={loteria}/>
        </ContainerDireitaSld>
    )
}


const ContainerDireitaSld = styled.div`
    display: flex;
    flex-direction: column;
`;