/*
You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).
*/

function top(products, amounts, prices) {
  return products
    .map((name, index) => ({
      name,
      index,
      revenue: amounts[index] * prices[index],
    }))
    .sort((a, b) => b.revenue - a.revenue || a.index - b.index)
    .slice(0, 3)
    .map((product) => product.name)
}

console.log(
  top(
    ['Computer', 'Cell Phones', 'Vacuum Cleaner'],
    [3, 24, 8],
    [199, 299, 399]
  )
)
