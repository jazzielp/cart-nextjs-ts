import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/app/interfaces/interface";

const cart: Product[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const productId = Number(body.productId);
  const response = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await response.json();

  const product = products.find((product) => product.id === productId);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  cart.push(product);
  return NextResponse.json({
    message: "Producto agregado al carrito",
    data: cart,
  });
}
