function binarySearch(arr, num2Find) {
  let [start, end] = [0, arr.length - 1]
  let mid

  while (start <= end) {
    mid = Math.floor((start + end) / 2)

    if (arr[mid] === num2Find) return true

    if (arr[mid] > num2Find) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return false
}

const arr = [1, 2, 3, 4, 6, 7, 8, 9]
const num2Find = 5
console.log(binarySearch(arr, num2Find))
