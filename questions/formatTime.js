function getTime(s) {
  let seconds = s
  function addZero(time) {
    return time.toString().length === 1 ? "0" + time : `${time}`
  }

  let hours = addZero(~~((seconds / 3600) % 24))
  let mins = addZero(~~((seconds % 3600) / 60))
  let secs = addZero(~~(seconds % 60))
  return `${hours}:${mins}:${secs}`
}

let seconds = 1234501
getTime(seconds)
