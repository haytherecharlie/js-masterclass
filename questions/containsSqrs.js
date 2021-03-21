function createFreqCounter(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = ++acc[val] || 1
    return acc
  }, {})
}

function containsSqrs(arr1, arr2) {
  const obj2 = createFreqCounter(arr2)

  return arr1.every((val) => {
    const sqr = Math.pow(val, 2)
    const sqrCount = obj2[sqr] || 0

    if (sqrCount) {
      obj2[sqr]--
      return true
    }
  })
}

console.log(containsSqrs([3, 3, 3], [9, 9, 9]))
