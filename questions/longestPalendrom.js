function getPalendromeLength(strArray) {
  return strArray.join('') === strArray.reverse().join('') ? strArray.length : 0
}

function getAllIndexes(arr, char, i) {
  return arr.reduce((acc, val, idx) => (val === char ? [...acc, i + idx] : acc), [])
}

function findPotentialPalendromes(str) {
  const palendromeLengths = []
  const charArray = str.split("")
  charArray.map((val, i) => {
    const indexArr = getAllIndexes(charArray.slice(i + 1), val, i + 1)
    indexArr.map((index) => {
      const checkVal = charArray.slice(i, index + 1)
      const length = getPalendromeLength(checkVal)
      if (length) {
        palendromeLengths.push(length)
      }
    })
  })
  return Math.max(...palendromeLengths)
}

console.log(findPotentialPalendromes("xracecarxpooracecar"))
