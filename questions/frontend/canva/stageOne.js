/**
  There is an API that has an endpoint that looks like this:
  GET designs/{:id}
  Show how you would call this endpoint 10 times using ids 1 through 10.
*/
const stageOne = (async () => {
  const endpoints = generateIds(10)
  const data = await fetchDesignsAsync(endpoints)
  console.log(data)
})()

function generateIds(limit, arr = []) {
  for (let i = 1; i <= limit; i++) {
    arr.push(fetchDesign(`designs/${i}`))
  }
  return arr
}

async function fetchDesignsAsync(endpoints) {
  try {
    return await Promise.all(endpoints)
  } catch (e) {
    console.error(e)
  }
}

function fetchDesign(id) {
  return Promise.resolve({
    designId: id,
    shapes: [
      { shapeId: "basic-square", color: { r: 255, g: 255, b: 255 } },
      { shapeId: "basic-circle", color: { r: 255, g: 255, b: 255 } },
      { shapeId: "basic-diamond", color: { r: 255, g: 0, b: 0 } },
      { shapeId: "basic-rectangle", color: { r: 0, g: 255, b: 0 } },
    ],
  })
}
