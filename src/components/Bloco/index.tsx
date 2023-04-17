import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLElement> {
}

const Bloco = ({children}:Props) => {
    return (
        <Sld>
            {children}
        </Sld>
    )
}

export default Bloco;

const Sld = styled.div`
    color: blue;
`;
