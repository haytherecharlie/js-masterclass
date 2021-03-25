function binarySearch(arr, find, start, end) {
  if (start > end) return -1

  const mid = Math.floor((start + end) / 2)

  if (arr[mid] === find) return mid

  if (arr[mid] > find) {
    return binarySearch(arr, find, start, mid - 1)
  }
  return binarySearch(arr, find, mid + 1, end)
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(binarySearch(arr, 16, 0, arr.length - 1))
