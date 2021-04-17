/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  let map = new Map()

  for (let char of s) {
    if (!map.has(char)) map.set(char, 0)
    map.set(char, map.get(char) + 1)
  }

  let odd = 0
  map.forEach((count) => {
    if (count % 2 === 1) odd++
  })

  if (odd > k) return false

  return s.length >= k
}
