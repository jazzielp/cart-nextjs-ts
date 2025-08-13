"use client";
import { useStore } from "@/app/stores/store";
import { useEffect } from "react";
export function Header() {
  const cart = useStore((state) => state.cart);
  const setIsCartOpen = useStore((state) => state.setIsCartOpen);
  const setCart = useStore((state) => state.setCart);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCart(data);
    };
    fetchCart();
  }, [])

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <header className="w-full px-6 py-4 md:px-10 md:py-6 flex items-center justify-between bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div>
        <h1 className="text-2xl md:text-3xl ml-6 font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
          Mi tienda
        </h1>
      </div>
      <div className="inline-block">
        <button
          className="relative inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-gray-900 font-semibold shadow-sm transition
               hover:bg-gray-50 hover:border-gray-300 active:translate-y-px
               focus:outline-none focus:ring-4 focus:ring-blue-200/60 focus:border-blue-300
               dark:bg-gray-900 dark:text-gray-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:focus:ring-blue-900/40 cursor-pointer"
          onClick={handleCartClick}
        >
          Carrito {cart.length > 0 && (
            <span
              className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 rounded-full
                   bg-red-500 text-white text-xs font-bold leading-5 text-center
                   ring-2 ring-white dark:ring-gray-900
                   drop-shadow-[0_4px_10px_rgba(239,68,68,0.35)]"
            >
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}