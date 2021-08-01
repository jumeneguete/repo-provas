import axios from "axios";
import { AllSubjects, SubjectName, SubNameId  } from "./Styles";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";

export default function ExamBySubject() {
    const { id } = useParams();
    const [register, setRegister] = useState([]);

    useEffect(() => {

        const result = axios.get(`http://localhost:4000/${id}/subject`);
        result.then(response => {
            setRegister(response.data);
        });
        result.catch(() => {
            return alert("Erro ao carregar provas!");
        }); 

    }, []);

    return (
        <>
            <Home />
            <AllSubjects>
            <SubjectName> {register[0]?.subject.name}</SubjectName>
                {register.map(r => (
                    <>
                        <a href={r.link} target="_blank">
                            <SubNameId key={r.id}>
                                {r.type.name} ➞ {r.name}.{r.semester} ➞ <span>{r.teacher.name}</span></SubNameId>
                        </a>
                    </>
                ))}

            </AllSubjects>
        </>
    )
}

