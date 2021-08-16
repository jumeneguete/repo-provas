import { FormButtonStyle } from "./Styles";

export default function FormButton({ children, type }) {
  return <FormButtonStyle type={type}>{children} </FormButtonStyle>;
}
