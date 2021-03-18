function digitsManipulation(n) {
  const digitArr = n.toString().split('')
  const product = digitArr.reduce((acc, val, i) => i === 0 ? parseInt(val) : acc * parseInt(val), 0)
  const sum = digitArr.reduce((acc, val) => acc + parseInt(val), 0)
  return product - sum
}

console.log(digitsManipulation(1242323))
