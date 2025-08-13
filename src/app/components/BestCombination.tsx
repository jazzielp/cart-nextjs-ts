import { useStore } from "@/app/stores/store";
import { ProductCard } from "./ProductCard";

export function BestCombination() {
  const bestCombination = useStore((state) => state.bestCombination);
  const totalPrice = bestCombination.reduce((total, product) => total + product.price, 0);
  const setBestCombination = useStore((state) => state.setBestCombination);

  const handleClick = () => {
    setBestCombination([]);
  }
  return (
    <main className="">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="space-y-2">
          <button className="inline-flex items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white transition-colors cursor-pointer"
            onClick={handleClick}
          >
            Lista de productos
          </button>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-gray-900 dark:text-white">
            Productos
          </h2>
        </div>
        <div className="sm:text-right">
          <p className="inline-flex items-center rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200 px-3 py-1.5 text-base font-medium">
            Total: ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid gap-8 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {bestCombination && bestCombination.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}