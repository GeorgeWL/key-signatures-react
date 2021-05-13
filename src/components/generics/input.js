export default function Input({ value, setValue, type = "text", ...rest }) {
  return <input type={type} onChange={setValue} value={value} {...rest} />;
}
