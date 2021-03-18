function convertObjToArr(obj) {
  return Object.entries(obj).map(([key, val]) => [key, val]).flat()
}

console.log(convertObjToArr({ wow: 'cool', fuck: 'yeah'}))