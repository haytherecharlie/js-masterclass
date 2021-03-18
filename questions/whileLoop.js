function nextDoubleton(num) {
  const checkDoubleton = (val) => Object.keys(val.toString().split("").reduce((acc, val) => ({ ...acc, [val]: true }), {})).length === 2
  let current = checkDoubleton(num) ? num + 1 : num

  do {
    current += 1
  } while (!checkDoubleton(current))

  return current
}

console.log(nextDoubleton(44))
