import { useLocation, useNavigate } from 'react-router-dom';
import { megasenaTheme, quinaTheme, timemaniaTheme } from '../../styles/theme';
import styled from 'styled-components'

export function Menu() {

    const navigate = useNavigate();
    const location = useLocation().pathname;

    function handleNavigateToTimeMania(){
        navigate('/timemania')
    }

    function handleNavigateToMegasena(){
        navigate('/megasena')
    }

    function handleNavigateToQuina(){
        navigate('/quina')
    }

    return (
        <ContainerSld>
            <UlSld>
                <LiSld onClick={handleNavigateToTimeMania}>
                    {location === '/timemania' ? <SelectedSld>Timemania</SelectedSld> : <TitleSld color={timemaniaTheme.loteria}>Timemania</TitleSld>}
                </LiSld>
                <LiSld onClick={handleNavigateToMegasena}>
                    {location === '/megasena' ? <SelectedSld>Megasena</SelectedSld> : <TitleSld color={megasenaTheme.loteria}>Megasena</TitleSld>}
                </LiSld>
                <LiSld onClick={handleNavigateToQuina}>
                    {location === '/quina' ? <SelectedSld>Quina</SelectedSld> : <TitleSld color={quinaTheme.loteria}>Quina</TitleSld>}
                </LiSld>
            </UlSld>
        </ContainerSld>
    );
}

const ContainerSld = styled.nav`
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
`;

const UlSld = styled.ul`
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
`;

const LiSld = styled.li`
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
`;

const SelectedSld = styled.p`
    color: #aaa;
    text-decoration: none;
`

const TitleSld = styled.p`
    color: ${(props) => props.color}
`
