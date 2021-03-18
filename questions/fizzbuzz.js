function fizzBuzz(n, i = 0, str = '') {
  if (i % 3 === 0) str += "fizz"
  if (i % 5 === 0) str += "buzz"
  if (str === '') console.log(i)
  else console.log(str)
  if(i < n) fizzBuzz(n, i + 1)
}

console.log(fizzBuzz(25))
