function longestSubArray(numString) {
  let check = true
  const totals = []
  const nums = numString.split("")

  function sameNextDigit(i) {
    return nums[i + 1] === `${parseInt(nums[i]) + 1}`
  }

  function countConsecutiveDigits(i, count) {
    while (sameNextDigit(i++)) count++
    return count
  }

  for (let i = 0; i < numString.length; i++) {
    if (sameNextDigit(i) && check) {
      totals.push(countConsecutiveDigits(i, 1))
      check = false
    } else {
      check = true
    }
  }
  return Math.max(...totals)
}

console.log(longestSubArray("134234890"))
