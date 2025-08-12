import { Product } from "../interfaces/interface";

interface ProductCartProps {
  product: Product;
}

export function ProductCart({ product }: ProductCartProps) {
  return (
    <div className="flex items-start justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 p-4 shadow-sm">
      <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{product.name}</h3>
        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{product.price}</p>
      </div>
    </div>
  )
}