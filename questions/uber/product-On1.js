///  -3 -2 -1  0  1  2  3
/// [ 6, 2, 1  - ]

///              [1, 2, 6]
///          [ -, 9, 3, 1 ]
function productArray(list_of_nums) {
  let retval = []
  let mul_left = []
  let mul_right = []

  mul_left[-1] = 1

  for (let i = 0; i < list_of_nums.length - 1; i++) {
    mul_left[i] = list_of_nums[i] * mul_left[i - 1]
  }

  mul_right[list_of_nums.length] = 1

  for (let j = list_of_nums.length - 1; j > 0; j--) {
    mul_right[j] = list_of_nums[j] * mul_right[j + 1]
  }

  for (let k = 0; k < list_of_nums.length; k++) {
    retval[k] = mul_left[k - 1] * mul_right[k + 1]
  }

  return retval
}

console.log(productArray([8, 2, 3, 3]))


