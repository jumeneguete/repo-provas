import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Home from "./Home"

export default function Subject() {
    const [register, setRegister] = useState([]);

    useEffect(() => {

        const result = axios.get(`http://localhost:4000/subject`);
        result.then(response => {
            console.log(response.data)
            setRegister(response.data);
        })

    }, []);

    return (
        <>
            <Home />
            <AllSubjects>

            {register.map(r =>(
                    <>
                        <Link to={`/subject/${r.id}`} >
                            <SubName key={r.id}> 
                            <Term> {r.term.name}</Term>{r.name} ➞ <span color="lightslategray">{r.exam.length} provas</span>
                            </SubName>
                            </Link>
                    </>
                ))}
             
            </AllSubjects>
        </>
    );
}

const AllSubjects = styled.div`
    width: 80%;
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;
`;

const Term = styled.span`
    font-size: 21px;
    font-weight: 600;
    color: #3D024E;
    margin-right: 15px;

`;

const SubName = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
    cursor: pointer;
`;