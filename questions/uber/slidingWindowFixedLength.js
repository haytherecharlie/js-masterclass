function slidingWindowFixedLength(arr, k) {
  let maxValue = Number.MIN_VALUE
  let currSum = 0

  for(let i = 0; i < arr.length; i++) {
    currSum += arr[i]

    if(i >= k -1) {
      maxValue = Math.max(currSum, maxValue)
      currSum -= arr[i - (k -1)]
    }
  }

  return maxValue
}

console.log(slidingWindowFixedLength([2, 3, 5, 3, 4], 2))