function productArray(arr) {
  const result = []
  const left_vals = []
  const right_vals = []

  left_vals[-1] = 1

  for (let i = 0; i < arr.length - 1; i++) {
    left_vals[i] = arr[i] * left_vals[i - 1]
  }

  right_vals[arr.length] = 1

  for (let j = arr.length - 1; j > 0; j--) {
    right_vals[j] = arr[j] * right_vals[j + 1]
  }

  for (let k = 0; k < arr.length; k++) {
    result[k] = left_vals[k - 1] * right_vals[k + 1]
  }

  return result
}

console.log(productArray([2, 4, 2, 2, 2]))

console.log((8 * 4))
