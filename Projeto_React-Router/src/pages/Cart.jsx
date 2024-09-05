import HomeNavegation from "../Components/HomeNavegation";

export default () => {
  return (
    <div>
      <title>Carrinho</title>
      <section className="bg-[#242424] min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-white font-bold text-2xl">Carrinho</h2>
        <p className="text-red-500 font-bold text-sm">
          Os produtos atualmente em seu carrinho.
        </p>
        <ul className="text-white font-bold text-sm">
          <li>2 un. - Memória RAM DDR4 8GB</li>
          <li>1 un. - Processador Intel Core i3 12th Gen</li>
          <li>1 un. - SSD Sata 240 GB</li>
          <li>1 un. - Fonte ATX 500W</li>
          <li>1 un. - Placa Mãe Intel LGA 1700</li>
          <li>1 un. - Gabinete</li>
        </ul>
        <button className="bg-[#DADADA] w-44 rounded h-8">
          Finalizar compra
        </button>
      </section>
    </div>
  );
};
