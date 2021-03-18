function vowels(str) {
  const chars = str.split("")
  const vowels = ["a", "e", "i", "o", "u"]

  let count = chars.filter((l) => vowels.includes(l)).length
  if (count === 0) count = chars.filter((l) => l === "y").length

  return count
}

console.log(vowels("yes"))
