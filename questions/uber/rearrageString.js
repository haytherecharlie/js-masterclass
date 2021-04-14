var reorganizeString = function (str) {
  let count = {},
    i = 0

  for (let char of str) {
    count[char] = count[char] + 1 || 1
  }

  let arr = Object.entries(count).sort((a, b) => a[1] - b[1])

  if (arr[arr.length - 1][1] > (str.length + 1) / 2) return ""

  arr = arr.flatMap(([l, c]) => new Array(c).fill(l))
  const result = new Array(arr.length)

  while (i < result.length) {
    result[i] = arr.pop()
    i += 2
  }

  i = 1
  while (i < result.length) {
    result[i] = arr.pop()
    i += 2
  }

  return result.join("")
}

console.log(reorganizeString("hfhshsdhsdhsdhsd"))
