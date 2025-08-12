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
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Mi tienda
          </h1>
        </div>
        <div>
          <button className="inline-flex items-center gap-3 rounded-full border-2 border-blue-600/80 px-4 py-2 md:px-6 md:py-3 font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white shadow-sm cursor-pointer">
            Carrito
            {
              cart.length > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  {cart.length}
                </span>
              )
            }
          </button>
        </div>
        <Cart />
      </header>
      <main className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <h2 className="text-4xl">Productos</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </main>
    </>
  );
}
