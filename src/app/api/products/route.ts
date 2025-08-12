import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Laptop Gaming", price: 1299 },
  { id: 2, name: "Mouse Inalámbrico", price: 45 },
  { id: 3, name: "Teclado Mecánico", price: 89 },
  { id: 4, name: "Monitor 4K", price: 399 },
  { id: 5, name: "Auriculares Bluetooth", price: 129 },
  { id: 6, name: "Webcam HD", price: 79 },
  { id: 7, name: "Silla Ergonómica", price: 249 },
  { id: 8, name: "Disco SSD 1TB", price: 119 },
  { id: 9, name: "Smartphone", price: 699 },
  { id: 10, name: "Tablet", price: 329 },
];

export async function GET() {
  return NextResponse.json(products);
}
