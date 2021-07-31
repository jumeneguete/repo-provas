import styled from "styled-components"

export default function Button({children}) {
    return (
        <ButtonStyle>{children} </ButtonStyle>
    );
}

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
    background-color: #3D024E;
    text-align: center;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        @media (max-width: 614px) {
            height: 60px;
        }
`;