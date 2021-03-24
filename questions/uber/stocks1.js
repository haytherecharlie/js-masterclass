// https://www.interviewcake.com/question/python/stock-price
// ^^ this guys a hack!

function getBestPrice(prices) {
  if (prices.length < 2) return "not enough data"
  const bestPrices = []

  function bestSubPrice(buy, subArr) {
    return subArr.reduce((acc, curr) => (curr - buy > acc ? curr - buy : acc), subArr[0] - buy)
  }

  for (let i = 0; i < prices.length - 1; i++) {
    bestPrices.push(bestSubPrice(prices[i], prices.slice(i + 1)))
  }
  return Math.max(...bestPrices)
}

console.log(getBestPrice([1, 1, 34]))
