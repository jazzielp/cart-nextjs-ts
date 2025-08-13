"use client"
import { useStore } from "@/app/stores/store";
import { Product } from "@/app/interfaces/interface"
import { addToCart } from "@/app/services/cart.service"

export function ProductCard({ product }: { product: Product }) {
  const setCart = useStore((state) => state.setCart);

  const handleClick = async (productId: number) => {
    try {
      const response = await addToCart(productId);
      const updatedCart = response.data;
      setCart(updatedCart);
      alert("Producto añadido al carrito");
    } catch (error) {
      console.error("Error al añadir al carrito:", error);
      alert("No se pudo añadir el producto al carrito");
    }
  }
  return (
    <div className="">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 shadow hover:shadow-md transition-shadow">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">${product.price}</p>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <button className="mt-4 mr-3 inline-flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950 transition-colors cursor-pointer"
            onClick={() => handleClick(product.id)}
          >
            Añadir al carrito
          </button>

        </div>
      </div>
    </div>
  )
}