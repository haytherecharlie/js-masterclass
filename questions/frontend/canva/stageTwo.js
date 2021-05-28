/**
  For each value in the shapes array, summate the total for r, g and b and return
  a strings the looks like these: 
    designs/1: { r: 191.25 g: 191.25 b: 127.5  }
    designs/2: { r: 191.25 g: 191.25 b: 127.5  }
    designs/3: { r: 191.25 g: 191.25 b: 127.5  }
*/
const stageTwo = (async () => {
  const endpoints = generateIds(10)
  const data = await fetchDesignsAsync(endpoints)
  const sums = calculateSummations(data)
  printSummations(sums)
})()

function calculateSummations(data) {
  return  data.map(({ designId, shapes }) => {
    const d = shapes.length
    return shapes.reduce((acc, {color}) => {
      acc.r += color.r
      acc.g += color.g
      acc.b += color.b
      return acc
    }, { d, designId, r: 0, g: 0, b: 0 })
  })
}

function printSummations(sums) {
  sums.map(({d, designId, r, g, b}) => {
    console.log(`${designId}: { r: ${r / d} g: ${g / d} b: ${b / d}  }`)
  })
}

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
