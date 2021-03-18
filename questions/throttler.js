function throttler(tasks = [], count = 2) {
  return tasks.filter((task, index) => (index >= count ? true : task()))
}

let c = console.log

console.log(throttler([c.bind(null, 0), c.bind(null, 1), c.bind(null, 2), c.bind(null, 3)], 2))
