import products from "./products";

export function fetchProducts(delayMs = 600) {
  return new Promise((resolve) => setTimeout(() => resolve(products), delayMs));
}

export function fetchProductById(id, delayMs = 400) {
  return new Promise((resolve) => setTimeout(() => {
    const numId = isNaN(Number(id)) ? id : Number(id);
    resolve(products.find(p => p.id === numId));
  }, delayMs));
}