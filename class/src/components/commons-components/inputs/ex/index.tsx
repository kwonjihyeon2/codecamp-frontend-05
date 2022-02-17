export default function InputEx(props) {
  return <input type={props.type} {...props.register} />;
}
