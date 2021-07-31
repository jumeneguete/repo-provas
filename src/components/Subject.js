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
                { }
                <Term> 1º Período</Term>
                {register.map(r => r.term.name === "1º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 2º Período</Term>
                {register.map(r => r.term.name === "2º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 3º Período</Term>
                {register.map(r => r.term.name === "3º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 4º Período</Term>
                {register.map(r => r.term.name === "4º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 5º Período</Term>
                {register.map(r => r.term.name === "5º Período" && (
                    <>
                       <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 6º Período</Term>
                {register.map(r => r.term.name === "6º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 7º Período</Term>
                {register.map(r => r.term.name === "7º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 8º Período</Term>
                {register.map(r => r.term.name === "8º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 9º Período</Term>
                {register.map(r => r.term.name === "9º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> 10º Período</Term>
                {register.map(r => r.term.name === "10º Período" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
                    </>
                ))}

                <Term> Eletiva</Term>
                {register.map(r => r.term.name === "Eletiva" && (
                    <>
                        <Link to={`/subject/${r.id}`}><SubName key={r.id}>{r.name} ➞ <span> {r.exam.length} provas</span></SubName></Link>
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
    align-items: center;
`;

const Term = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: #3D024E;
    margin-top: 20px;
    margin-bottom: 10px;

`;

const SubName = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
    cursor: pointer;

    span {
        color: lightslategray;
    }
`;