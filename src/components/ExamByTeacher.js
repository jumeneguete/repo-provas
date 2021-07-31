import axios from "axios";
import { AllTeachers, ExamTeacher,NameTeacher } from "./Styles";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";

export default function ExamBySubject() {
    const { id } = useParams();
    const [register, setRegister] = useState([]);

    console.log(id)
    useEffect(() => {

        const result = axios.get(`http://localhost:4000/${id}/teacher`);
        result.then(response => {
            console.log(response.data)
            setRegister(response.data);
        })

    }, []);

    return (
        <>
            <Home />
            <AllTeachers>
                {register.map(r => (
                    <>
                        <NameTeacher key={r.id}> {r.teacher.name}</NameTeacher>
                        <Link to={`#`}>
                            <ExamTeacher key={r.id}>
                                {r.type.name} ➞ {r.name}.{r.semester} ➞ <span>{r.subject.name}</span></ExamTeacher>
                        </Link>
                    </>
                ))}

            </AllTeachers>
        </>
    )
}
