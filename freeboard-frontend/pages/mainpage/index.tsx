import { withAuth } from "../../src/components/commons-components/hoc/withAuth";
import BestListPage from "../../src/components/units/boards/BestList/BestList.container";

export const MainPage = () => {
  return (
    <>
      <BestListPage />
    </>
  );
};

export default withAuth(MainPage);
