import ProductList from "@components/product-list";
import type { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y py-16">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
