var maxProfit = function (prices) {
  let min = Number.MAX_VALUE
  let maxProf = 0

  for (let price of prices) {
    if (price < min) min = price
    else if (price - min > maxProf) maxProf = price - min
  }
  return maxProf
}
