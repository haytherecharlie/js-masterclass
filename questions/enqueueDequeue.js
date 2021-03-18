let array = []

function enqueue(val) {
  array = [val, ...array]
  return array
}

function dequeue(val) {
  const index = array.findIndex(i => i === val)
  if(index === -1) return array
  array.splice(index, 1)
  return array
}

console.log(array)
console.log(enqueue('hello'))
console.log(enqueue('goodbye'))
console.log(dequeue('hello'))
console.log(array)