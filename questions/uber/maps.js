let map = new Map()

map.set('j', 2)
map.set('x', 9)
const x = [...map.entries()].sort(([, av], [, bv]) => av - bv)
console.log(x)
