import styled from "styled-components";
import { AddCircleOutline } from 'react-ionicons'
import { Link } from 'react-router-dom';


const Top = styled.div`
    height: 90px;
    background-color: #3D024E;
    font-family: 'Nunito', sans-serif;
    color: #F9F9F9;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`;

const HeaderLogo = styled(Link)`
    font-family: 'Train One', cursive;
    font-size: 40px;

    span {
        font-size: 50px;
    }
    &:hover{
        color: #F4D4FE
    }

    @media (max-width: 614px) {
        font-size: 30px;

        span {
            font-size: 40px;
}
}
`;

const Send = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
        color: #F4D4FE
    }
`;

const Icon = styled(AddCircleOutline)`
    margin-right: 10px;
`;

const Text = styled.div`
    font-size: 18px;

    @media (max-width: 614px) {
       display: none;   
    }      
`;

const Main = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Buttons = styled.div`
    width: 600px;
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 614px) {
     width: 95%;
     flex-direction: column;
}
`;

const Logo = styled.div`
    font-family: 'Train One', cursive;
    font-size: 60px;
    color: #3D024E;

    span {
        font-size:70px;
    }

    @media (max-width: 614px) {
        font-size: 50px;

        span {
            font-size: 60px;
}
}
`;

const AllSubjects = styled.div`
    width: 80%;
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;
`;

const Term = styled.span`
    font-size: 21px;
    font-weight: 600;
    margin-right: 15px;
    color: ${props => props.haveExams ? "#3D024E" : "gray"};

`;

const SubName = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
    cursor: ${props => props.haveExams ? "pointer" : "not-allowed"};
    color: ${props => props.haveExams ? "inherit" : "gray"};
`;

const NoExam = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #3D024E;
    margin: 20px 0;

`;

const AllTeachers = styled.div`
    width: 60%;
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 614px) {
     width: 90%;
}
`;

const TeacherName = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
    cursor: pointer;

    span {
        color: ${props => props.haveExams ? "#3D024E" : "gray"}
    }
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

const ExamTeacher = styled.h2`
    font-size: 19px;
    margin-bottom: 7px;
`;

const NameTeacher = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #3D024E;
    margin-bottom: 20px;

`;


export {Top, HeaderLogo, Send, Icon, Text, Main, Buttons, Logo, AllSubjects, Term, SubName, NoExam, AllTeachers, TeacherName, SubjectName, SubNameId, ExamTeacher, NameTeacher}