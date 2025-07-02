import ProductsTable from "@/components/page/products/ProductsTable";
import { demoProductsData } from "@/demoData/products";

const ProductPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  return (
    <>
      <ProductsTable
        products={demoProductsData as never[]}
        meta={{ page: 1, totalPage: 1, total: 1 }}
        filters={{ category }}
      />
    </>
  );
};

export default ProductPage;
