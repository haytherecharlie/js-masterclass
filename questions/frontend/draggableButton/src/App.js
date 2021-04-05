import { useRef } from "react"
import logo from "./logo.svg"
import "./App.css"

export default function App() {
  const btnRef = useRef(null)
  let posX, posY

  function handleMouseUp() {
    const third = window.innerWidth / 3
    const position = Math.floor(btnRef.current.offsetLeft / third)
    btnRef.current.style.left = `${position * third + 20}px`
    btnRef.current.style.top = `20px`
    btnRef.current.removeEventListener("mousemove", handleMouseMove)
  }

  function handleMouseMove(e) {
    btnRef.current.style.left = `${e.clientX - posX}px`
    btnRef.current.style.top = `${e.clientY - posY}px`
  }

  function handleMouseDown(e) {
    const { left, top } = e.target.getBoundingClientRect()
    posY = e.clientY - top
    posX = e.clientX - left
    btnRef.current.addEventListener("mousemove", handleMouseMove)
  }

  return (
    <div className="App" onMouseUp={handleMouseUp}>
      <div className="container" />
      <div className="container" />
      <div className="container" />
      <button ref={btnRef} id="slider" onMouseDown={handleMouseDown}>
        <img src={logo} className="App-logo" alt="logo" />
      </button>
    </div>
  )
}
