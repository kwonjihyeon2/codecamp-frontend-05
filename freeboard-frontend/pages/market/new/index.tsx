import { withAuth } from "../../../src/components/commons-components/hoc/withAuth";
import CreateProductContainer from "../../../src/components/units/market/create/createProduct.container";

export const CreateProductPage = () => {
  return <CreateProductContainer isEdit={false} />;
};

export default withAuth(CreateProductPage);
