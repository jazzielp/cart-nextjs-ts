'use client'
import { useState, useEffect } from "react";
import { ProductCard } from "@/app/components/ProductCard";
import { Product } from "@/app/interfaces/interface";
import { Budget } from "./components/Budget";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [bestCombination, setBestCombination] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <main className="">
      <div className="flex justify-between max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div>
          {
            bestCombination.length > 0 ?
              <h2 className="text-4xl">La mejor combinación</h2>
              :
              <h2 className="text-4xl">Productos</h2>
          }
        </div>
        <Budget products={products} setBestCombination={setBestCombination} />
      </div>
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid gap-8 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </main>
  );
}
