import styled from 'styled-components';
import { AddCircleOutline } from 'react-ionicons'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Top>
                <HeaderLogo to={"/"}>Repo<span>P</span>rovas</HeaderLogo>
                <Send to={"/"}>
                    <Icon
                        color={'#00000'}
                        title={"icone para adicionar uma prova"}
                        height="35px"
                        width="35px"
                    />
                    <Text>Clique para <br /> enviar provas</Text>
                </Send>
            </Top>
        </>
    )
};

const Top = styled.div`
    height: 90px;
    background-color: #3D024E;
    font-family: 'Nunito', sans-serif;
    color: #F9F9F9;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`;

const HeaderLogo = styled(Link)`
    font-family: 'Train One', cursive;
    font-size: 40px;

    span {
        font-size: 50px;
    }
    &:hover{
        color: #F4D4FE
    }

    @media (max-width: 614px) {
        font-size: 30px;

        span {
            font-size: 40px;
}
}
`;

const Send = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
        color: #F4D4FE
    }
`;

const Icon = styled(AddCircleOutline)`
    margin-right: 10px;
`;

const Text = styled.div`
    font-size: 18px;

    @media (max-width: 614px) {
       display: none;   
    }      
`;

//${props => props.openComments ? "block" : "none"};