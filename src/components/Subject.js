import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllSubjects, Term, SubName, NoExam } from "./Styles";
import Home from "./Home";

export default function Subject() {
  const [register, setRegister] = useState([]);

  useEffect(() => {
    const result = axios.get(`${process.env.REACT_APP_HOST}/subject`);
    result.then((response) => {
      setRegister(response.data);
    });
    result.catch(() => {
      return alert("Erro ao carregar matérias!");
    });
  }, []);
  console.log(register);

  return (
    <>
      <Home />
      <AllSubjects>
        {register.map(
          (r) =>
            r.exam.length > 0 && (
              <>
                <Link to={`/subject/${r.id}`} key={r.termId}>
                  <SubName key={r.id} haveExams={true}>
                    <Term haveExams={true} key={r.term.id}>
                      {" "}
                      {r.term.name}
                    </Term>
                    {r.name} ➞{" "}
                    <span color="lightslategray">
                      {r.exam.length} {r.exam.length === 1 ? "prova" : "provas"}
                    </span>
                  </SubName>
                </Link>
              </>
            )
        )}

        <NoExam>Disciplinas do curso sem provas adicionadas:</NoExam>

        {register.map(
          (r) =>
            r.exam.length === 0 && (
              <>
                <SubName key={r.id} haveExams={false}>
                  <Term haveExams={false}> {r.term.name}</Term>
                  {r.name}
                </SubName>
              </>
            )
        )}
      </AllSubjects>
    </>
  );
}
