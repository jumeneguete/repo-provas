import { Link } from "react-router-dom"
import { SuccessStyle, Back } from "./Styles";

export default function Success() {
    return (
        <>
        <SuccessStyle> Enviado com sucesso! </SuccessStyle>
        <Link to="/"><Back>Home</Back></Link>  
        </>
    );
}

