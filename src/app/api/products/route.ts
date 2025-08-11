import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 200 },
];

export async function GET() {
  return NextResponse.json(products);
}
