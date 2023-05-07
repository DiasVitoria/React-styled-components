import styled from "styled-components";

export function Data(props: any){

    const loteria = props.item
    
    return (
        <ContainerDataSld>Concurso {loteria.numeroDoConcurso} - {loteria.dataPorExtenso}</ContainerDataSld>
    )
}

const ContainerDataSld = styled.p`
    color: #4c556c;
    margin-left: 55px;
`