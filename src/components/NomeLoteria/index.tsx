import logoquina from "../../assets/trevo-quina.png";
import logomegasena from "../../assets/trevo-megasena.png";
import logotimemania from "../../assets/trevo-timemania.png"
import { Props } from "../../types";
import styled from "styled-components";

const NomeLoteria = (props: any) => {

    const loteria: Props = props.item
    const title = loteria.tipoJogo === 'MEGA_SENA' ? 'MEGA-SENA' : loteria.tipoJogo === 'QUINA' ? 'QUINA' : 'TIMEMANIA'
    const logo = loteria.tipoJogo === 'MEGA_SENA' ? logomegasena : loteria.tipoJogo === 'QUINA' ? logoquina : logotimemania
    const colorStyle = loteria.tipoJogo === 'MEGA_SENA' ? { "color": "#209869" } : { "color": "#930089" }

    function VerificaValor(value: number) {
        return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    }

    return (
        <Sld>
            <div>
                <img src={logo} alt="" />
                <h1 style={colorStyle}>{title}</h1>

                <p>
                    Estimativa de prêmio do próximo concurso. Sorteio em: {loteria.dataProximoConcurso}
                </p>
                <h3 style={colorStyle}>{VerificaValor(loteria.valorEstimadoProximoConcurso)}</h3>
            </div>
        </Sld>
    )

};

export { NomeLoteria };

const Sld = styled.div`
    width: 20%;
    max-width: 430px;
    padding: 20px;
    margin: 10px 0 0 40px;
`;

styled.p`
    color: #4c556c;
    margin-top: 10px;
`