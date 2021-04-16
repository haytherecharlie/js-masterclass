function compression(str) {
  let count = 0, result = ''

  for(let i = 0; i < str.length; i++) {
    count += 1
    if(str[i] !== str[i+1]) {
      result = `${result}${str[i]}${count}`
      count = 0
    }
  }
  return result
}

console.log(compression('aabbcc33rrsss'))