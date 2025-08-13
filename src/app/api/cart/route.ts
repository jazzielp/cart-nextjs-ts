import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/app/interfaces/interface";
const cart: Product[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();
    const { origin } = new URL(request.url);
    const res = await fetch(`${origin}/api/products`, { cache: "no-store" });
    if (!res.ok)
      return NextResponse.json(
        { error: "Failed to load products" },
        { status: 500 }
      );

    const products: Product[] = await res.json();

    const product = products.find((p) => p.id === Number(productId));
    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });

    cart.push(product);
    return NextResponse.json({
      message: "Producto agregado al carrito",
      data: cart,
    });
  } catch (err) {
    console.error("Cart POST error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
