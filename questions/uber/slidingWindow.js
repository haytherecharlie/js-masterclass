// function slidingWindow(n, arr) {
//   if(arr.length < n) return arr

//   const windows = []
//   for(let i = 0; i <= arr.length - n; i++) {
//     windows.push(Math.max(...arr.slice(i, i + n)))
//   }

//   return windows
// }

// function dequeueSlidingWindow(k, arr) {
//   const queue = []

//   for (let i = 0; i < k; i++) {
//     queue.push(arr[i])
//   }

//   const maxes = [Math.max(...queue)]

//   for(let i = k; i < arr.length; i++) {
//     queue.pop()
//     queue.push(arr[i])
//     maxes.push(Math.max(...queue))
//   }

//   return maxes
// }

console.log(dequeueSlidingWindow(3, [1, 2, 3, 4, 5, 6, 7]))
