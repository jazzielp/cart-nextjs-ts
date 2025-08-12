"use client"

export function Cart() {
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
          <div className="flex items-start justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 p-4 shadow-sm">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Product 1</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Price: $100</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="inline-flex items-center gap-2">
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-semibold">-</button>
                <span className="min-w-6 text-center text-sm font-medium text-slate-900 dark:text-white">1</span>
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-semibold">+</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Total:</h3>
        </div>
        <div>
          <p className="text-base font-bold text-slate-900 dark:text-white">$ 3,000</p>
        </div>
      </footer>
    </aside>
  )
}