import { Product } from "../interfaces/interface";

interface ProductCartProps {
  product: Product;
}

export function ProductCart({ product }: ProductCartProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-base font-bold text-slate-900 dark:text-white">{product.name}</h3>
      <p className="text-xl font-bold text-blue-600 dark:text-blue-500">${product.price}</p>
    </div>
  )
}