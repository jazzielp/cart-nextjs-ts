import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Producto 1", price: 60 },
  { id: 2, name: "Producto 2", price: 95 },
  { id: 3, name: "Producto 3", price: 120 },
  { id: 4, name: "Producto 4", price: 75 },
  { id: 5, name: "Producto 5", price: 150 },
  { id: 6, name: "Producto 6", price: 85 },
  { id: 7, name: "Producto 7", price: 110 },
  { id: 8, name: "Producto 8", price: 45 },
  { id: 9, name: "Producto 9", price: 199 },
  { id: 10, name: "Producto 10", price: 130 },
  { id: 11, name: "Producto 11", price: 70 },
  { id: 12, name: "Producto 12", price: 99 },
  { id: 13, name: "Producto 13", price: 140 },
  { id: 14, name: "Producto 14", price: 55 },
  { id: 15, name: "Producto 15", price: 160 },
  { id: 16, name: "Producto 16", price: 89 },
  { id: 17, name: "Producto 17", price: 115 },
  { id: 18, name: "Producto 18", price: 79 },
  { id: 19, name: "Producto 19", price: 175 },
  { id: 20, name: "Producto 20", price: 149 },
];

export async function GET() {
  return NextResponse.json(products);
}
