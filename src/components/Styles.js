import styled from "styled-components";
import { AddCircleOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const Top = styled.div`
  height: 90px;
  background-color: #3d024e;
  font-family: "Nunito", sans-serif;
  color: #f9f9f9;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const HeaderLogo = styled(Link)`
  font-family: "Train One", cursive;
  font-size: 40px;

  span {
    font-size: 50px;
  }
  &:hover {
    color: #f4d4fe;
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

  &:hover {
    color: #f4d4fe;
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
  font-family: "Train One", cursive;
  font-size: 60px;
  color: #3d024e;

  span {
    font-size: 70px;
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

  @media (max-width: 614px) {
    width: 90%;
  }
`;

const Term = styled.span`
  font-size: 21px;
  font-weight: 600;
  margin-right: 15px;
  color: ${(props) => (props.haveExams ? "#3D024E" : "gray")};

  @media (max-width: 614px) {
    font-size: 18px;
  }
`;

const SubName = styled.h2`
  font-size: 19px;
  margin-bottom: 15px;
  cursor: ${(props) => (props.haveExams ? "pointer" : "not-allowed")};
  color: ${(props) => (props.haveExams ? "inherit" : "gray")};

  @media (max-width: 614px) {
    font-size: 16px;
  }
`;

const NoExam = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #3d024e;
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
  margin-bottom: 12px;
  cursor: pointer;

  span {
    color: ${(props) => (props.haveExams ? "#3D024E" : "gray")};
  }
`;

const SubjectName = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #3d024e;
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
  color: #3d024e;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 80%;
  margin: 120px auto 430px auto;
`;

const SelectStyle = styled.select`
  width: 400px;
  height: 30px;
  padding-left: 10px;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  margin: 10px auto;
  border: none;
  border-radius: 5px;
  position: relative;

  &::placeholder {
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    color: #000;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (max-width: 614px) {
    width: 90%;
  }
`;

const SuccessStyle = styled.div`
  margin-top: 170px;
  font-size: 30px;
  font-weight: 600;
  font-family: "Nunito", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
  text-decoration: underline;
  font-style: italic;
  color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyle = styled.button`
  width: 250px;
  height: 70px;
  margin: 10px auto 10px auto;
  border: none;
  border-radius: 30px 2px 15px 2px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  background-color: #3d024e;
  text-align: center;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (max-width: 614px) {
    height: 60px;
  }
`;
const FormButtonStyle = styled.button`
  width: 350px;
  height: 46px;
  margin: 40px auto 40px auto;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  background-color: #3d024e;
  text-align: center;

  &:hover {
    background-color: #4c135d;
  }

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (max-width: 614px) {
    width: 90%;
  }
`;
const InputStyle = styled.input`
  width: 350px;
  height: 30px;
  padding-left: 10px;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin: 10px auto;
  border: solid 2px gray;
  border-radius: 5px;

  &::placeholder {
    font-family: "Nunito", sans-serif;
    font-size: 15px;
    color: gray;
    font-style: italic;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (max-width: 614px) {
    width: 90%;
  }
`;

export {
  Top,
  HeaderLogo,
  Send,
  Icon,
  Text,
  Main,
  Buttons,
  Logo,
  AllSubjects,
  Term,
  SubName,
  NoExam,
  AllTeachers,
  TeacherName,
  SubjectName,
  SubNameId,
  ExamTeacher,
  NameTeacher,
  Container,
  SelectStyle,
  SuccessStyle,
  Back,
  ButtonStyle,
  FormButtonStyle,
  InputStyle,
};
