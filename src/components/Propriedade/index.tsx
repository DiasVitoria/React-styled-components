import styled from "styled-components"

interface Props {
    rotulo: string;
    value: string;
    set: Function;
}

const Propriedade = ({ rotulo,value, set }: Props) => {
    return (
        <WrapperSld>
            <LabelSld htmlFor="nome">{rotulo}</LabelSld>
            <InputSld
                id="nome"
                type="text"
                value={value}
                onChange={
                    (e) => set(
                        e.target.value
                    )
                }
            />
        </WrapperSld>
    )
}

export default Propriedade

const WrapperSld = styled.div`
    margin: 20px 0;
    background-color: aqua;
`;

const InputSld = styled.input`
    border: 1px solid red;
    border-radius: 4px;
`;

const LabelSld = styled.label`
    font-family: calibri;
    font-size: 16px;
`;