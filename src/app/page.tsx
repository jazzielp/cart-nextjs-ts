'use client'
import { useEffect } from "react";
import { Cart } from "./components/Cart";
import { useStore } from "@/app/stores/store";
import { ListProducto } from "./components/ListProducto";

export default function Home() {
  const isCartOpen = useStore((state) => state.isCartOpen);
  const setProducts = useStore((state) => state.setProducts);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <ListProducto />
      {isCartOpen && <Cart />}
    </>
  );
}
