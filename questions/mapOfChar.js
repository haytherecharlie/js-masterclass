function mapOfChar() {
  let map = {'a': 0, 'b': 0, 'c': 0}
  let char = 'a'
  if(map.hasOwnProperty(char)) {
    console.log(char)
  }
}


console.log(mapOfChar())