import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";

export default function ExamBySubject() {
    const { id } = useParams();
    const [register, setRegister] = useState([]);

    console.log(id)
    useEffect(() => {

        const result = axios.get(`http://localhost:4000/${id}/subject`);
        result.then(response => {
            console.log(response.data)
            setRegister(response.data);
        })

    }, []);

    return (
        <>
            <Home />
            <AllSubjects>
                {register.map(r => (
                    <>
                        <SubjectName> {r.subject.name}</SubjectName>
                        <Link to={`#`}>
                            <SubNameId key={r.id}>
                                {r.type.name} ➞ {r.name}.{r.semester} ➞ <span>{r.teacher.name}</span></SubNameId>
                        </Link>
                    </>
                ))}

            </AllSubjects>
        </>
    )
}

const AllSubjects = styled.div`
    width: 80%;
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;
`;

const SubjectName = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #3D024E;
    margin-bottom: 20px;

`;

const SubNameId = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
    cursor: pointer;

    span {
        color: lightslategray;
    }
`;