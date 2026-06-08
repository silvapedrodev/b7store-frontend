import { getProducts } from "@/actions/get-products";
import { ProductList } from "../product-list";
import { data } from "@/data";

export const MostSoldProducts = async () => {
  const products = await getProducts({
    orderBy: "selling",
    limit: 4
  })

  return (
    <div className="mt-10">
      <h2 className="text-lg md:text-2xl font-medium text-center md:text-left">Produtos mais vendidos</h2>
      <p className="text-sm md:text-base text-gray-500 text-center md:text-left">Campeões de visualização da nossa loja.</p>

      <div className="mt-9">
        <ProductList list={products} />
      </div>
    </div>
  );
}