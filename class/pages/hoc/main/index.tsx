import { withAuth } from "../../../src/components/commons-components/example-hoc/withAuth";

export const LoginAfterPage = () => {
  return <div>성공</div>;
};

export default withAuth(LoginAfterPage);
