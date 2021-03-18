function concatArrays(...args) {
  return args.reduce((acc, val) => {
    if (typeof val === "object" && val.length) return [...acc, ...val]
    return acc
  }, [])
}

console.log(concatArrays([12, 1], ["hello"], [true, false, true]))
