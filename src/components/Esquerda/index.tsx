import styled from "styled-components";
import { Estimativa } from "../estimativa"
import { NomeLoteria } from "../nome-loteria"

export function Esquerda(props: any){

    const loteria = props.item

    return (
        <ContainerEsquerdaSld>
            <NomeLoteria />
            <Estimativa item={loteria}/>
        </ContainerEsquerdaSld>
    )
}

const ContainerEsquerdaSld = styled.div`
    width: 20%;
    max-width: 430px;
    padding: 20px;
    margin: 10px 0 0 40px;
`;
