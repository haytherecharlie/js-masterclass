function containsSqrs(arr1, arr2) {
  const set = new Set(arr2)

  return !arr1.filter((val) => !set.has(Math.pow(val, 2))).length
}

console.log(containsSqrs([3, 4, 6], [9, 16, 36]))
