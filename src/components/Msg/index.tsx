import styled from "styled-components";

interface Props {
    children: string;
}

const Msg = ({children}:Props) => {
    return (
        <Sld>
            {children}
        </Sld>
    )
}

export default Msg;

const Sld = styled.p`
    color: blue;
`;