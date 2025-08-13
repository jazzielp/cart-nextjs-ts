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
    <div className="h-full">
      <div className="flex flex-col h-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="flex-grow flex justify-between items-start">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{product.name}</h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-500">${product.price}</p>
        </div>
        <button
          className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-950 transition-colors cursor-pointer"
          onClick={() => handleClick(product.id)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}