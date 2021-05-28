function alignText(text, max = 15) {
  // break the lines into 15 characters
  const lines = breakUpLines(text, max)

  // right align
  // const rightString = rightAlign([["there", "once", "was"], 12], 15)

  // center align
  // const centerString = centerAlign([["there", "once", "was"], 12], 15)
}

function breakUpLines(text, max) {
  const words = text.split(' ')
  console.log(words)
}

function rightAlign(line, max) {
  const [text] = line
  const joinedLine = text.join(" ")
  const endSpaces = max - joinedLine.length
  return joinedLine + " ".repeat(endSpaces)
}

function centerAlign(line, max) {
  const [text, count] = line
  const spaces = max - count
  const spacesPerLine = spaces / (text.length - 1)
  const remainder = spaces % (text.length - 1)

  return text.reduce((acc, word, i) => {
    if (i < remainder) {
      return acc + word + " ".repeat(Math.ceil(spacesPerLine))
    }
    return acc + word + " ".repeat(Math.floor(spacesPerLine))
  }, "")
}

module.exports = alignText
