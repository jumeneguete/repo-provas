import axios from "axios";
import { AllTeachers, ExamTeacher, NameTeacher } from "./Styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";

export default function ExamBySubject() {
  const { id } = useParams();
  const [register, setRegister] = useState([]);

  useEffect(() => {
    const result = axios.get(`${process.env.REACT_APP_HOST}/${id}/teacher`);
    result.then((response) => {
      setRegister(response.data);
    });
    result.catch(() => {
      return alert("Erro ao carregar provas!");
    });
  }, []);

  return (
    <>
      <Home />
      <AllTeachers>
        <NameTeacher> {register[0]?.teacher.name}</NameTeacher>
        {register.map((r) => (
          <>
            <a href={r.link} target="_blank" rel="noreferrer">
              <ExamTeacher key={r.id}>
                {r.type.name} ➞ {r.name}.{r.semester} ➞{" "}
                <span>{r.subject.name}</span>
              </ExamTeacher>
            </a>
          </>
        ))}
      </AllTeachers>
    </>
  );
}
