import products from "../database.json";

export default function loadProduct({ params }) {
  const product = products.find((p) => {
    return p.id === Number(params.productId);
  });

  if (!product) {
    throw new Response("404 not fund", { status: 404 });
  }

  return product;
}
