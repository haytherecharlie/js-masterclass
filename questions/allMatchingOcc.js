/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

function devideIntoWords(str, length, arr = []) {
  for (let i = 0; i < str.length; i += length) {
    arr.push(str.substr(i, length))
  }
  return arr
}

var findSubstring = function (s, words) {
  if (words.length === 0) return []
  const results = []
  const wordLength = words[0].length
  const wordsLength = words.length * wordLength
  const sortedWords = words.sort()

  // loop chars and check if substring matches a word.
  for (let i in s) {
    if (words.includes(s.substr(i, wordLength))) {
      // if so, grab a string by length of words * letters
      // devide into an array of words equal in length to words[0].length
      const devidedWords = devideIntoWords(s.substr(i, wordsLength), wordLength)
      // check if that array.sort() === words.sort()
      if (JSON.stringify(devidedWords.sort()) === JSON.stringify(sortedWords)) {
        // if yes, push to results array.
        results.push(parseInt(i))
      }
    }
  }

  return results
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))
