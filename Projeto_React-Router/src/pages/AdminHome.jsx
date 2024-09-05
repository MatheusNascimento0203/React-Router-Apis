import HomeNavegation from "../Components/HomeNavegation";

export default () => {
  return (
    <div>
      <title>Administração</title>
      <main className="bg-[#242424] min-h-screen flex flex-col gap-2 font-bold items-start justify-center">
        <h1 className="text-white text-2xl">Área Administrativa</h1>
        <p className="text-white">
          Esta é a área de administração da loja. Aqui você poderá adicionar
          produtos e ver os pedidos.
        </p>
      </main>
    </div>
  );
};
