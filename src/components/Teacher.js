import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {NoExam, AllTeachers, TeacherName } from "./Styles"
import Home from "./Home"

export default function Teacher() {
    const [register, setRegister] = useState([]);

    useEffect(() => {

        const result = axios.get(`http://localhost:4000/teacher`);
        result.then(response => {
            console.log(response.data)
            setRegister(response.data);
        })

    }, []);

    return (
        <>
            <Home />
            <AllTeachers>
                {register.map(r => r.exam.length > 0 && (
                    <Link to={`/teacher/${r.id}`}>
                        <TeacherName key={r.id} haveExams={true}><span>{r.name}</span> ➞ {r.exam.length} provas</TeacherName>
                    </Link>
                ))}

                <NoExam>Professores do curso sem provas adicionadas:</NoExam>

                {register.map(r => r.exam.length === 0 && (
                    <Link to={`/teacher/${r.id}`}>
                        <TeacherName key={r.id} haveExams={false}><span>{r.name}</span></TeacherName>
                    </Link>
                ))}

            </AllTeachers>
        </>
    );
};
