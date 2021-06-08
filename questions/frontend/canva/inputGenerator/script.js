const body = document.querySelector("body")

const data = {
  foo: "hello world",
  bar: "another string",
  baz: 5,
  subdata: {
    foo: "hello world",
    bar: "another string",
    baz: 5,
  },
}

function handleKeyDown(key) {
  const input = document.querySelector(`#${key}`)
  const value = input.value
  if (input.type === "number") {
    console.log(input)
    data[key] = parseInt(value)
  } else {
    data[key] = value
  }
  console.log(data)
}

function generateInputGroup(key, value) {
  const wrapper = document.createElement("div")
  const label = document.createElement("label")
  const input = document.createElement("input")
  label.innerText = key
  input.id = key
  input.value = value
  if (Number.isInteger(value)) {
    input.type = "number"
    input.addEventListener("click", () => handleKeyDown(key))
  } else {
    input.type = "text"
  }
  input.addEventListener("keydown", () => handleKeyDown(key))
  wrapper.append(label)
  wrapper.append(input)
  body.append(wrapper)
}

function addInputsToBody(obj) {
  Object.entries(obj).map(([key, value]) => {
    if (typeof value !== "object") {
      generateInputGroup(key, value)
    } else {
      addInputsToBody(obj[key])
    }
  })
}

addInputsToBody(data)
