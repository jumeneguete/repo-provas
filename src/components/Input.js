import { InputStyle } from "./Styles";

export default function Input({ type, placeholder, value, setValue }) {
  return (
    <InputStyle
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></InputStyle>
  );
}
