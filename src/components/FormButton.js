import styled from "styled-components"

export default function FormButton({children, type}) {
    return (
        <FormButtonStyle type={type} >{children} </FormButtonStyle>
    );
}

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
    background-color: #3D024E;
    text-align: center;

        &:hover{
            background-color: #4C135D;
        }

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;