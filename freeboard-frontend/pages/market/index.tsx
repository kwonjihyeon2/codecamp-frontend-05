import { withAuth } from "../../src/components/commons-components/hoc/withAuth";
import ItemList from "../../src/components/units/market/list/ProductList.container";

export default function CreateProductPage() {
  return <ItemList />;
}

// export default withAuth(CreateProductPage);
