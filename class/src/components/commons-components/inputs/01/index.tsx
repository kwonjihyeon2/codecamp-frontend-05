interface IPropsInput {
  type: string;
}

export default function Input01(props: IPropsInput) {
  return <input type={props.type} {...props.register} />;
}
