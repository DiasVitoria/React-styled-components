import styled from 'styled-components'
import { UseTheme } from "../../hooks";

export function Estimativa(props: any) {

    const { theme } = UseTheme()

    function VerificaValor() {
        if (props.item.valorEstimadoProximoConcurso !== undefined) {
          const valor = props.item.valorEstimadoProximoConcurso.toLocaleString(
            "pt-br",
            { style: "currency", currency: "BRL" }
          );
          return valor;
        }
      }

    return (
        <>
            <ContainerEstimativaSld>
            Estimativa de prêmio do próximo concurso. Sorteio em {props.item.dataProximoConcurso}:
            </ContainerEstimativaSld>
            <ValorPremioSld color={theme.loteria}>{VerificaValor()}</ValorPremioSld>
        </>
    )
}

const ContainerEstimativaSld = styled.p`
    color: #4c556c;
    width: 250px;
    margin: 25px 0 0 40px;
`;

const ValorPremioSld = styled.h3`
    margin: 15px 0 0 40px;
    font-weight: bold;
    color: ${(props) => props.color}
`