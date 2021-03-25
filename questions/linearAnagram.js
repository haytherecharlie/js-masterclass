function slidingWindow(arr, n) {
  const dequeue = arr.slice(0, n)
  const totals = [Math.max(...dequeue)]

  for (let i = n; i < arr.length; i++) {
    dequeue.shift()
    dequeue.push(arr[i])
    totals.push(Math.max(...dequeue))
  }
  return totals
}

console.log(slidingWindow([1, 2, 3, 4, 5, 6, 7], 2))
