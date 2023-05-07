import styled from "styled-components";

export function Carregando() {
    return (
        <ContainerCarregandoSld>
            <CarregandoSld>Carregando...</CarregandoSld>
        </ContainerCarregandoSld>
    )
}


const ContainerCarregandoSld = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #222;
`

const CarregandoSld = styled.h1``