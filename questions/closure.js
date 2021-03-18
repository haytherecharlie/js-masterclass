function counter() {
  let count = 0

  function increment(n) {
    count += n
  }

  function getCount() {
    return count
  }

  return {
    increment,
    getCount
  }
}

const x = counter()
console.log(x.increment(2))
console.log(x.getCount())
console.log(x.increment(4))
console.log(x.getCount())
console.log('count', x.count)