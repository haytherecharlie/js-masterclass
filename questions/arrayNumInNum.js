function arrayNumInNum(arr, sub) {
  return arr.filter(val => `${val}`.includes(`${sub}`)).length
}

console.log(arrayNumInNum([1232, 23, 5235, 75342], 23))