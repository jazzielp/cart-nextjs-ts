import { Budget } from "./Budget";
import { useStore } from "@/app/stores/store";
import { ProductCard } from "./ProductCard";

export function ListProducto() {
  const products = useStore((state) => state.products);
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row lg:justify-between max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="mb-4">
          <h2 className="text-4xl">Productos</h2>
        </div>
        <Budget />
      </div>
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid gap-8 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}