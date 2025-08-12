import { ProductCard } from "@/app/components/ProductCard";
import { Product } from "@/app/interfaces/interface";
import { Cart } from "./components/Cart";

export default async function Home() {
  const responseProducts = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await responseProducts.json();
  const responseCart = await fetch("http://localhost:3000/api/cart");
  const cart = await responseCart.json();
  return (
    <>
      <header className="w-full px-6 py-4 md:px-10 md:py-6 flex items-center justify-between bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div>
          <h1 className="text-2xl md:text-3xl ml-6 font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Mi tienda
          </h1>
        </div>
      </header>
      <main className="">
        <div className="flex justify-between max-w-7xl ml-8 px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <h2 className="text-4xl">Productos</h2>
        </div>
        <Cart cart={cart} />
        <div className="max-w-5xl ml-8 px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid gap-8 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          {products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </main>
    </>
  );
}
