function addNumbers(...args) {
  const [num1, num2] = args.map((num) => roundUpTwoDecimals(num))
  let carry = 0,
    result = "",
    pos1 = num1.length - 1,
    pos2 = num2.length - 1

  while (pos1 >= 0 || pos2 >= 0) {
    let char1 = num1[pos1--],
      char2 = num2[pos2--]

    if (char1 === ".") result = "." + result
    else {
      let sum = (char1 - "0" || 0) + (char2 - "0" || 0) + carry
      let total = sum % 10
      carry = Math.floor(sum / 10)
      result = total + result
    }
  }

  if (carry > 0) result = carry + result

  return result
}

function roundUpTwoDecimals(strNum) {
  const [int, float] = strNum.split(".")
  if (typeof float === "undefined") {
    return `${int}.00`
  }

  const decimals = float.substring(0, 3)
  if (decimals.length === 0) {
    return `${int}.00`
  } else if (decimals.length === 1) {
    return strNum + "0"
  } else if (decimals.length === 3) {
    return `${int}.${parseInt(decimals.substring(0, 2)) + 1}`
  } else {
    return strNum
  }
}

console.log(addNumbers("222.21", "222.21"))

// O(n)
