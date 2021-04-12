var multiply = function (num1, num2) {
  const [n1, n2] = [num1, num2].sort((a, b) => a.length - b.length)
  let result = []
  let slot
  let carry = 0

  if (n1 === "0" || n2 === "0") return "0"

  for (let i = n1.length - 1; i >= 0; i--) {
    slot = n1.length - 1 - i
    for (let j = n2.length - 1; j >= 0; j--) {
      let sum = n2[j] * n1[i] + carry
      sum += result[slot] || 0
      carry = Math.floor(sum / 10)
      result[slot++] = sum % 10
    }
    if (carry > 0) {
      result[slot] = carry
      carry = 0
    }
  }

  return result.reverse().join("")
}

console.log(multiply("233", "322"))
