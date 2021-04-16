/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  function create2dWordsArray() {
    let spaceLength = 0
    let lettersLength = 0
    let line = []
    let lines = []

    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      let wordLength = word.length

      if (wordLength + spaceLength + lettersLength <= maxWidth) {
        lettersLength += wordLength + spaceLength
        line.push(word)
        spaceLength = 1
      } else {
        lines.push([line, lettersLength - line.length + 1])
        line = []
        lettersLength = wordLength
        line.push(word)
      }
    }
    if (line.length) lines.push([line, lettersLength - line.length + 1])

    return lines
  }

  function addSpacesToEnd([line, letterCount]) {
    let joinedLine = line.join(" ")
    let spacesCount = maxWidth - joinedLine.length
    return joinedLine + " ".repeat(spacesCount)
  }

  function addSpacesBetween([line, letterCount]) {
    let diff = maxWidth - letterCount
    let spacePos = line.length - 1
    let spaces = diff / (spacePos === 0 ? 1 : spacePos)
    let remainder = diff % spacePos

    if (spacePos === 0) {
      line[0] = line[0] + " ".repeat(spaces)
    }

    for (let i = 0; i < spacePos; i++) {
      if (i < remainder) {
        line[i] = line[i] + " ".repeat(Math.ceil(spaces))
      } else {
        line[i] = line[i] + " ".repeat(Math.floor(spaces))
      }
    }
    return line.join("")
  }

  let lines = create2dWordsArray()
  return lines.map((line, i) => {
    if (i === lines.length - 1) return addSpacesToEnd(line, maxWidth)
    return addSpacesBetween(line, maxWidth)
  })
}
