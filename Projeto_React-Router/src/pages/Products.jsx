import products from "../database.json";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <title>Produto</title>
      <section className="bg-[#242424] min-h-screen flex flex-col items-center justify-center gap-2">
        <h2 className="font-bold text-white text-xl">Todos os produtos</h2>
        <p className="font-bold text-red-500 text-sm ">
          Confira todas as nossas ofertas.
        </p>
        <section className="flex flex-col gap-4">
          <h3 className="text-center text-white">Processadores</h3>
          <ul className="text-center text-white flex flex-col gap-3">
            {products.map((product) => (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <p>R$ {product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button className="bg-[#DADADA] text-red-900 font-bold w-32 rounded h-8">
                    Ver
                  </button>
                </Link>
                <button className="bg-[#DADADA] w-32  text-red-900 font-bold  rounded h-8">
                  Compras
                </button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
};
