function applyDiscount(price, quantity = 1) {
  if (quantity < 2) return {price, hasDiscount: false};

  const discountRule = [
    [0, 10000, 0.05],
    [10000, 20000, 0.1],
    [20000, 1000000, 0.15],
  ];

  discountRule.forEach(([min, max, discount]) => {
    if (price >= min && price <= max) {
      price = price - price * discount;
    }
  });

  return {price, hasDiscount: true};
}

export default function TotalMinicartPrices(lines) {
  if (!lines.length) return {price: 0, hasDiscount: false};

  let totalMinicartPrices = lines.map(
    (product) => {
      let discounts = [
        'EntregaFutura10OFF',
        'EntregaFutura5OFF',
        'DateCustom5OFF',
        'DateCustom10OFF',
      ];

      let hasDiscount = product.attributes.find((attr) =>
        discounts.includes(attr.key),
      );

      let price = +product.merchandise.priceV2.amount * product.quantity;

      if (!hasDiscount) return applyDiscount(price, product.quantity);

      let discount =
        discounts
          .find((discount) => hasDiscount.key === discount)
          .replace(/\D/g, '') / 100;

      let totalPrice = price - price * discount;

      return applyDiscount(totalPrice, product.quantity);
    },
    [lines],
  );

  return totalMinicartPrices;
}
