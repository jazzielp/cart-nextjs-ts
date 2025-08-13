export async function addToCart(productId: number) {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });

  if (!response.ok) {
    throw new Error("Failed to add product to cart");
  }
  return response.json();
}
