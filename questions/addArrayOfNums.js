function addTwoFloats(num1, num2) {
  let i1 = num1[1].length - 1
  let i2 = num2[1].length - 1
  let carry2 = 0
  let result2 = ""

  // Calculate Decimal
  while (i2 >= 0 || i1 >= 0) {
    let sum = carry2

    if (i1 >= 0) {
      sum += num1[1][i1--] - "0"
    }

    if (i2 >= 0) {
      sum += num2[1][i2--] - "0"
    }

    result2 = (sum % 10) + result2
    carry2 = Math.floor(sum / 10)
  }

  let j1 = num1[0].length - 1
  let j2 = num2[0].length - 1
  let carry1 = 0
  let result1 = ""

  // Calculate Integer
  while (j2 >= 0 || j1 >= 0) {
    let sum = j1 === num1[0].length - 1 ? carry2 + carry1 : carry1

    if (j1 >= 0) {
      sum += num1[0][j1--] - "0"
    }

    if (j2 >= 0) {
      sum += num2[0][j2--] - "0"
    }

    result1 = (sum % 10) + result1
    carry1 = Math.floor(sum / 10)
  }

  if (carry1) result1 = carry1 + result

  // Round to two decimals
  if(result2.length > 2) {
    result2 = result2[2] > 0 ? result2[0] + (`${parseInt(result2[1]) + 1}`) : result2[0] + result2[1]
  }

  return `${result1}.${result2}`
}

function setDecimal(num) {
  let [int, dec] = num.split(".")
  if (typeof dec === "undefined") dec = "00"
  if (dec.length === 1) dec = dec + "0"
  return `${int}.${dec}`
}

function addArrayOfNums(arr) {
  return arr.reduce((acc, val, i) => {
    return i === 0 ? setDecimal(val) : addTwoFloats(setDecimal(acc).split("."), setDecimal(val).split("."))
  }, "")
}

console.log(addArrayOfNums(["0.0", "0.99", "2.01"]))
