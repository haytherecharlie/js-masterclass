// Create a breaking bad style credits image
const set = new Set(["H", "He", "C"])

function buildNameRecords(fullName) {
  return fullName.split(" ").map((name) => {
    for (let i = 0; i < name.length; i++) {
      const first = name.charAt(i).toLowerCase()
      const second = name.charAt(i + 1).toLowerCase()

      if (set.has(`${first.toUpperCase()}${second}`)) {
        return [name, `${first.toUpperCase()}${second}`, i]
      }

      if (set.has(`${first.toUpperCase()}`)) {
        return [name, `${first.toUpperCase()}`, i]
      }
    }
  })
}

function displayName(name) {
  const nameRecords = buildNameRecords(name)
  return nameRecords.map(([fullName, element, index]) => {
    return `${fullName.substr(0, index)}[${element}]${fullName.substr(index + element.length, fullName.length)}`
  })
}

console.log(displayName("Hellen Carter"))
