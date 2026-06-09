import { ProductList } from "../product-list";
import { getRelatedProducts } from "@/actions/get-related-products";

type Props = {
  id: number;
}

export const RelatedProducts = async ({ id }: Props) => {
  const products = await getRelatedProducts(id);

  return (
    <div className="mt-12 md:mt-14">
      <h3 className="text-lg md:text-2xl font-medium text-center md:text-left">Você também vai gostar</h3>
      <div className="mt-9">
        <ProductList list={products} />
      </div>
    </div>
  );
}