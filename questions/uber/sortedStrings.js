/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // use an object, because map doesn't help us.
  let map = {}

  for (let str of strs) {
    let sorted = str.split("").sort().join("")
    if (map[sorted]) map[sorted].push(str)
    else map[sorted] = [str]
  }

  return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
