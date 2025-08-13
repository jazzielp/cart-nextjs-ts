import { ProductCard } from "@/app/components/ProductCard";
import { Product } from "@/app/interfaces/interface";
import { Budget } from "./components/Budget";

export default async function Home() {
  const responseProducts = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await responseProducts.json();
  const responseCart = await fetch("http://localhost:3000/api/cart");
  const cart = await responseCart.json();
  return (
    <main className="">
      <div className="flex justify-between max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div>
          <h2 className="text-4xl">Productos</h2>
        </div>
        <Budget products={products} />
      </div>
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid gap-8 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </main>
  );
}
