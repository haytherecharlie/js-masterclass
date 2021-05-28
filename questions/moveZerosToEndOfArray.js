function moveZerosToEndOfArray(arr) {
  let lastNonZero = arr.length - 1
  for(let i = arr.length -1; i >= 0; i--) {
    if(arr[i] === 0) {
      let temp = arr[i]
      arr[i] = arr[lastNonZero]
      arr[lastNonZero] = temp
      lastNonZero--
    }
  }

  return arr
}


console.log(moveZerosToEndOfArray([0,2,4,0,4,0,3,3,3,3]))