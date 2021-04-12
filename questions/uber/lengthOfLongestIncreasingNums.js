function lengthOfLongestIncreasingNums(n) {
  let count = 0,
      ans = 0

  for (let i in n) {
    if (parseInt(n[i]) > parseInt(n[i - 1]) || i === "0") count += 1
    else count = 1
    ans = Math.max(ans, count)
  }
  return ans
}

console.log(lengthOfLongestIncreasingNums("1"))
