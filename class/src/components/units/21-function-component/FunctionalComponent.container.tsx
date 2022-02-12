import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  //return <div>{FunctionalComponentUI({ count: 500 })}</div>; - 인자
  return <FunctionalComponentUI count={2000} />;
}
