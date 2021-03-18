function twoDecimal(number) {
  return parseInt(number.substr(0, 4) * 100) / 100
}

console.log(twoDecimal(`0.423423`))