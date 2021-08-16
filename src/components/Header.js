import { Top, HeaderLogo, Send, Icon, Text } from "./Styles";

export default function Header() {
  return (
    <>
      <Top>
        <HeaderLogo to={"/"}>Repo<span>P</span>rovas</HeaderLogo>
        <Send to={"/send"}>
          <Icon
            color={"#00000"}
            title={"icone para adicionar uma prova"}
            height="35px"
            width="35px"
          />
          <Text>Clique para <br /> enviar provas</Text>
        </Send>
      </Top>
    </>
  );
}
