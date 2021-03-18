function checksum(code) {
  const digitArr = code.split('')
  const odd = digitArr.filter((_, i) => i % 2 === 1).reduce((acc, val) => acc + parseInt(val), 0)
  const even = digitArr.filter((_, i) => i % 2 === 0).reduce((acc, val) => acc + parseInt(val), 0)
  return even - odd
}

console.log(checksum('14235232343'))