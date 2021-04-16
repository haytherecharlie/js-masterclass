function rowsAndColums(r, c) {
  const max = r * c
  let arr = [],
    str = "",
    column = 0,
    currentRow = 0,
    curr = currentRow

  for (let i = 0; i < max; i++) {
    str += curr < 10 ? `0${curr} ` : `${curr} `
    column++
    curr += c

    if (column === c) {
      arr.push(str.substring(0, str.length - 1))
      column = 0
      curr = ++currentRow
      str = ""
    }
  }
  return arr
}

console.log(rowsAndColums(6, 5))
