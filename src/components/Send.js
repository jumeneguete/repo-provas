import { Container, SelectStyle } from "./Styles";
import { useEffect, useState } from "react"
import axios from "axios";
import dayjs from 'dayjs';
import Input from "./Input";
import FormButton from "./FormButton";
import { useHistory } from "react-router-dom";
import Joi from "joi";

export default function Send() {
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState(9999999);
    const [teacher, setTeacher] = useState("");
    const [subFromDB, setSubFromDB] = useState([]);
    const [teacherFromDB, setTeacherFromDB] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const result = axios.get(`http://localhost:4000/subject`);
        result.then(response => {
            setSubFromDB(response.data);
        });
        result.catch(() => {
            return alert("Erro ao carregar matérias!");
        });        

    }, [])

    useEffect(() =>{
        const result = axios.get(`http://localhost:4000/${subject}/subject-teacher`);
        result.then(response => {
            setTeacherFromDB(response.data);
        });
        result.catch(() => {
            return alert("Erro ao carregar professores!");
        }); 

    }, [subject]);

    const linkSchema = Joi.object({ 
        link: Joi.string().pattern(new RegExp(".+\.pdf$")),
    });

    function register(e) {
        e.preventDefault();

        if (type === "invalid" || year === "invalid" || semester === "invalid" || subject === "invalid" || teacher === "invalid" || !url){
            return alert("Preencha todos os campos corretamente!")
        }
        
        const validLink = linkSchema.validate({link: url});
        if (validLink.error) return alert("Insira um link .pdf válido!");

        const body = { name: year, semester, link: url, subjectId: subject, teacherId: teacher, typeId: type }
        console.log(body)


        const request = axios.post("http://localhost:4000/exam", body);
        request.then(() => {history.push("/send/success")});
        request.catch((err) => {
            if (err.response.status === 409){
                alert("Parece que esta prova já está no nosso sistema!");
            } else {
                alert("Preencha corretamente os campos!");
            }
            
        });
    }


    const years = [];
    let counter = 1;
    for (let i = 1990; i <= dayjs().year(); i++) {
        years.push({ id: counter, year: i });
        counter++;
    }

    return (
        <Container>
            <form onSubmit={register}>
            <Input type="text" value={url} setValue={setUrl} placeholder="link .pdf da prova" />
            <br/>
            <SelectStyle value={type} onChange={(e) => setType(e.target.value)}>
                <option value="invalid">Selecione o tipo:</option>
                <option value="1">P1</option>
                <option value="2">P2</option>
                <option value="3">PF</option>
                <option value="4">2ª Chamada</option>
            </SelectStyle>
            <br />
            <SelectStyle value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="invalid">Selecione o ano:</option>
                {years.map(y => (
                    <option key={y.id} value={y.year}>{y.year}</option>
                ))}
            </SelectStyle>
            <br />
            <SelectStyle value={semester} onChange={(e) => setSemester(e.target.value)}>
                <option value="invalid">Selecione o semestre:</option>
                <option value="1">1</option>
                <option value="2">2</option>
            </SelectStyle>
            <br />
            <SelectStyle value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="invalid">Selecione a discplina:</option>
                {subFromDB.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))}
            </SelectStyle>
            <br/>
            <SelectStyle value={teacher} onChange={(e) => setTeacher(e.target.value)}>
                <option value="invalid">Selecione o professor:</option>
                {teacherFromDB?.map(t => (
                    <option key={t.teacherId} value={t.teacher.id}>{t.teacher.name}</option>
                ))}
            </SelectStyle>
            <br/>
            <FormButton type="submit" >Enviar</FormButton>
            </form>
        </Container>
    )
};
