// Using a while loop, could also use recursion or a for loop. 
function countPalendrome(charArr, idxA, idxB) {
  let [a, b, count] = [idxA, idxB, 0]
  while (charArr[a] === "{" && charArr[b] === "}") {
    a -= 1
    b += 1
    count += 2
  }
  return count
}


function longestPalendrome(str) {
  return Math.max(...str.split("").reduce((acc, char, i, arr) => {
      if (char === "{" && arr[i + 1] === "}") {
        return [...acc, countPalendrome(arr, i, i + 1, 0)]
      }
      return acc
    }, [])
  )
}

// console.log(countPalendrome(["{", "{", "{", "}", "}", "}"], 2, 3, 0))
console.log(longestPalendrome("{}{{{}}{}}"))
