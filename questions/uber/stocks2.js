function bestRoi(prices) {
  if (prices.length < 2) return "not enough data"

  function bestPossibleReturn(buy, subPrices) {
    return subPrices.reduce((acc, sell) => {
      if (sell - buy > acc) return sell - buy
      return acc
    }, subPrices[0] - buy)
  }

  const bestPrices = []
  for(let i = 0; i < prices.length - 1; i++) {
    bestPrices.push(bestPossibleReturn(prices[i], prices.slice(i + 1)))
  }

  return Math.max(...bestPrices)
}

console.log(bestRoi([5, 3, 4, 1]))
