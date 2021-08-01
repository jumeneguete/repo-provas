import styled from "styled-components"

export default function Input({ type, placeholder, value, setValue }) {
    return (
        <InputStyle type={type}  placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}></InputStyle>
    );
}

const InputStyle = styled.input`
    width: 350px;
    height: 30px;
    padding-left: 10px;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    margin: 10px auto;
    border: solid 2px gray;
    border-radius: 5px;

        &::placeholder{
            font-family: 'Nunito', sans-serif;
            font-size: 15px;
            color: gray;
            font-style: italic;
        }
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;