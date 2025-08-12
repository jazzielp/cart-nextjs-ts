"use client"

import { Product } from "../interfaces/interface";
import { ProductCart } from "./ProductCart";

interface CartProps {
  cart: Product[];
}

export function Cart({ cart }: CartProps) {
  return (
    <aside className="fixed right-0 top-0 h-full w-[92vw] max-w-sm bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 flex flex-col">
      <header className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Carrito de compras</h2>
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          X
        </button>
      </header>
      <main className="flex-1 overflow-y-auto px-5 py-4">
        <div className="space-y-4">
          {cart ? (
            cart.map((product, index) => (
              <ProductCart key={index

              } product={product} />
            ))
          ) : (
            <p className="text-center text-slate-500 dark:text-slate-400">Tu carrito está vacío</p>
          )}
        </div>
      </main>
      {/* <footer className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Total:</h3>
        </div>
        <div>
          <p className="text-base font-bold text-slate-900 dark:text-white">$ 3,000</p>
        </div>
      </footer> */}
    </aside>
  )
}