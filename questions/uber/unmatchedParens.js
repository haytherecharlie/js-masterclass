function unmatchedParens(s) {
  let map = { "(": 0, ")": 0, "[": 0, "]": 0 },
    remove = new Set()

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    map[char]++
    if (map[")"] > map["("] || map["]"] > map["["]) {
      remove.add(i)
      map[char]--
    }
  }

  map = { "(": 0, ")": 0, "[": 0, "]": 0 }

  for (let j = s.length - 1; j >= 0; j--) {
    let char = s[j]
    map[char]++
    if (map["("] > map[")"] || map["["] > map["]"]) {
      remove.add(j)
      map[char]--
    }
  }

  return [...remove.values()].sort((a, b) => b - a).reduce((acc, idx) => {
    return acc.slice(0, idx) + acc.slice(idx + 1, s.length)
    }, s)
  
}

console.log(unmatchedParens(")(([()][[()]))"))
