// import Decimal from "decimal.js";

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => {
    acc += purchase;
    return acc;
  }, 0);

  total = total * discount;

  return total.toFixed(2);
}

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log(total);
