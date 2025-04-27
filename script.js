function showAllProducts(products) {
  products.forEach((product) => newProductCard(product));
}

function getFilteredProducts(productNames, query) {
  return productNames.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
}

function getConvertedPrices(productPrices, currency) {
  const conversionRates = {
    usd: 1,
    gbp: 0.76, // Example conversion rate, update as needed
    jpy: 110.57, // Example conversion rate, update as needed
  };

  return productPrices.map((price) =>
    (price * conversionRates[currency]).toFixed(2)
  );
}

function getCartTotal(cartPrices) {
  return cartPrices.reduce((total, price) => total + price, 0).toFixed(2);
}

showAllProducts(PRODUCTS);
