import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/app/interfaces/interface";
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const cart: Product[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const productId = Number(body.productId);
  const response = await fetch(`${baseUrl}/api/products`);
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
