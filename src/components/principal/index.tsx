import styled from "styled-components";
import { Direita } from "../direita"
import { Esquerda } from "../esquerda"

export function Principal(props: any){

    const loteria = props.item

    return (
        <ContainerPrincipalSld>
            <Esquerda item={loteria} />
            <Direita item={loteria} />
        </ContainerPrincipalSld>
    )
}


const ContainerPrincipalSld = styled.div`
    display: flex;
`