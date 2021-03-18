function palindrome(str) {
  const backwards = str.split('').reverse().join('')
  return str === backwards
}

console.log(palindrome('racecar'))