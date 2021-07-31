import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Home from "./Home"

export default function Teacher() {
    const [register, setRegister] = useState([]);
    
    useEffect(() =>{

        const result = axios.get(`http://localhost:4000/teacher`);
        result.then(response => {
           console.log(response.data)
           setRegister(response.data);
        })

    },[]);

    return (
        <>
        <Home />
        <AllTeachers>
            {register.map( r => (
                <Link to={`/teacher/${r.id}`}>
                    <TeacherName key={r.id}>{r.name} -- <span> {r.exam.length} provas</span></TeacherName>
                </Link>
            ))}
            
        </AllTeachers>
        </>
    );
}

const AllTeachers = styled.div`
    width: 50%;
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 614px) {
     width: 90%;
}
`;

const TeacherName = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
    cursor: pointer;
`;