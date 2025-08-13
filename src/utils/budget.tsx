import { Product } from "@/app/interfaces/interface";

export function findBestCombination(products: Product[], budget: number) {
  const orderedProducts = products.sort((a, b) => a.price - b.price);
  let saldo = budget;
  const bestCombination: Product[] = orderedProducts.filter((product) => {
    const preSaldo = saldo;
    saldo = saldo - product.price;
    return product.price <= preSaldo
  })

  return bestCombination;
}