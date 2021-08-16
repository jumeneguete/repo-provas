import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoExam, AllTeachers, TeacherName } from "./Styles";
import Home from "./Home";

export default function Teacher() {
  const [register, setRegister] = useState([]);

  useEffect(() => {
    const result = axios.get(`${process.env.REACT_APP_HOST}/teacher`);
    result.then((response) => {
      setRegister(response.data);
    });
    result.catch(() => {
      return alert("Erro ao carregar professores!");
    });
  }, []);

  return (
    <>
      <Home />
      <AllTeachers>
        {register.map(
          (r) =>
            r.exam.length > 0 && (
              <Link to={`/teacher/${r.id}`}>
                <TeacherName key={r.id} haveExams={true}>
                  <span>{r.name}</span> ➞ {r.exam.length}{" "}
                  {r.exam.length === 1 ? "prova" : "provas"}
                </TeacherName>
              </Link>
            )
        )}

        <NoExam>Professores do curso sem provas adicionadas:</NoExam>

        {register.map(
          (r) =>
            r.exam.length === 0 && (
              <Link to={`/teacher/${r.id}`}>
                <TeacherName key={r.id} haveExams={false}>
                  <span>{r.name}</span>
                </TeacherName>
              </Link>
            )
        )}
      </AllTeachers>
    </>
  );
}
