/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (m) {
  let map = {},
    rooms = 0,
    max = 0

  for (let i = 0; i < m.length; i++) {
    let [start, end] = m[i]

    if (map[start]) map[start] += 1
    else map[start] = 1

    if (map[end]) map[end] -= 1
    else map[end] = -1
  }

  Object.values(map).map((value) => {
    rooms += value
    max = Math.max(max, rooms)
  })
  return max
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
)
