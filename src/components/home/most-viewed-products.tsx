import { ProductList } from "../product-list";
import { data } from "@/data";

export const MostViewedProducts = async () => {
  // To-do: fazer a requisição dos produtos

  return (
    <div className="mt-10">
      <h2 className="text-lg md:text-2xl font-medium text-center md:text-left">Produtos mais vistos</h2>
      <p className="text-sm md:text-base text-gray-500 text-center md:text-left">Campeões de vendas da nossa loja.</p>

      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
}