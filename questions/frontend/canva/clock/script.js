const face = document.querySelector("#face")
const secHand = document.querySelector("#second")
const minuteHand = document.querySelector("#minute")
const hourHand = document.querySelector("#hour")
const secondTick = 360 / 60
const minuteTick = 360 / 60
const hourTick = 360 / 12

const interval = setInterval(() => {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  const secondsTick = seconds * secondTick
  const minutesTick = minutes * minuteTick
  const hoursTick = hours * hourTick

  secHand.style.transform = `rotate(${secondsTick}deg)`
  minuteHand.style.transform = `rotate(${minutesTick}deg)`
  hourHand.style.transform = `rotate(${hoursTick}deg)`
}, 1000)

function addNumbersToClock(faceDigits) {
  faceDigits.map((val, index) => {
    const digitFace = document.createElement("span")
    digitFace.innerText = val
    digitFace.style.position = "absolute"
    digitFace.style.top = `10px`
    digitFace.style.left = `50%`
    digitFace.style.transform = `translate(-50%, 0)`
  })
}
