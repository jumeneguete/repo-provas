import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "./Button"

export default function Home() {
    
    return (
        <Main>
            <Logo>Repo<span>P</span>rovas</Logo>
            <Buttons>
               <Link to="/subject"><Button>Disciplinas</Button></Link> 
                <Link to="/teacher"><Button>Professores</Button></Link>
            </Buttons>
        </Main>
    )
};

const Main = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Buttons = styled.div`
    width: 600px;
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 614px) {
     width: 95%;
     flex-direction: column;
}
`;

const Logo = styled.div`
    font-family: 'Train One', cursive;
    font-size: 60px;
    color: #3D024E;

    span {
        font-size:70px;
    }

    @media (max-width: 614px) {
        font-size: 50px;

        span {
            font-size: 60px;
}
}

`;