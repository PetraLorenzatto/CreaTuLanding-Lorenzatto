import products from "./products";

export default function getMockAPIData(delayMs = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), delayMs);
    });
}
