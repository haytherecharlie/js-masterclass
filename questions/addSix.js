function createBase(n) {
  return (num) => n + num
}

const addSix = createBase(6)

console.log(addSix(11))