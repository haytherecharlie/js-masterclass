/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (m) {
  let schedule = m.sort((a, b) => a[0] - b[0])
  let meetingrooms = [schedule[0]]
  let minRooms = 1

  for (let i = 1; i < schedule.length; i++) {
    const [start, end] = schedule[i]
    const available = meetingrooms.findIndex((time) => start >= time[1])

    if (available > -1) meetingrooms[available] = [start, end]
    else {
      meetingrooms.push([start, end])
      minRooms = Math.max(meetingrooms.length, minRooms)
    }
  }

  return minRooms
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
)
