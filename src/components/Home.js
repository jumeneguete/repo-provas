import { Link } from "react-router-dom"
import {Main, Buttons, Logo} from "./Styles"
import Button from "./Button"

export default function Home() {
    
    return (
        <Main>
            <Logo>Repo<span>P</span>rovas</Logo>
            <Buttons>
               <Link to="/subject"><Button>Disciplinas</Button></Link> 
                <Link to="/teacher"><Button>Professores {process.env.BANANA}</Button></Link>
            </Buttons>
        </Main>
    )
};

