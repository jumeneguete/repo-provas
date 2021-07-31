import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components"
import Home from "./Home"

export default function Teacher() {
    useEffect(() =>{

        const result = axios.get(`http://localhost:4000/teacher`);
        result.then(response => {
           console.log(response.data)
        })

    },[]);

    return (
        <>
        <Home />
        <AllTeachers>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano que so fala espanhol -- <span> 10 provas</span></TeacherName>
            <TeacherName>Fulano  so fala espanhol -- <span> 10 provas</span></TeacherName>
        </AllTeachers>
        </>
    );
}

const AllTeachers = styled.div`
    width: 80%;
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TeacherName = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
    cursor: pointer;
`;