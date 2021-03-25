function maxProductThree(arr) {
  if (arr.length === 3) return arr.reduce((acc, val) => acc * val, 1)
  if (arr.length < 3) return "not enough values"
  const sVals = arr.sort((a, b) => a - b)
  const biggest = [sVals[0], sVals[1], sVals[sVals.length - 1], sVals[sVals.length - 2]]
  
  const lowScore = biggest[0] * biggest[1] * biggest[biggest.length -1]
  console.log(lowScore)
}

console.log(maxProductThree([-2, -5, -2, -7, -14]))
