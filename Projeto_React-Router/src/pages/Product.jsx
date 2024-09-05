import { Link, useLoaderData, useParams } from "react-router-dom";

export default () => {
  const product = useLoaderData();

  return (
    <section className="bg-[#242424] min-h-screen flex flex-col gap-2">
      <Link to={"/products"}>
        <button className="bg-[#DADADA] text-red-900 font-bold w-32 rounded h-8">
          Voltar
        </button>
      </Link>
      <h2 className="text-white">{product.name}</h2>
      <p className="text-red-500">{product.description}</p>
      <p className="text-white">{product.price}</p>
      <button className="bg-[#DADADA] text-red-900 font-bold w-32 rounded h-8">
        Comprar
      </button>
    </section>
  );
};
