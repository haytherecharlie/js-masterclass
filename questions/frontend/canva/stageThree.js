/**
  In the previous part, we worked with a simplified document format. In actual fact shapes can contain other shapes.
  Given this new document format, can you modify your algorithm to calculate the average colour of the designs?
  An updated fetchDesign function has been provided.
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
      { shapeId: "basic-shape", color: { r: 55, g: 40, b: 255 }, children: [] },
      {
        shapeId: "duck",
        color: { r: 255, g: 255, b: 252 },
        children: [
          { shapeId: "duck-bill", color: { r: 255, g: 255, b: 255 }, children: [] },
          { shapeId: "duck-body", color: { r: 205, g: 255, b: 252 }, children: [] },
          { shapeId: "duck-legs", color: { r: 100, g: 255, b: 252 }, children: [] },
        ],
      },
      { shapeId: "zigzag-polygon", color: { r: 205, g: 255, b: 252 }, children: [] },
      {
        shapeId: "fish",
        color: { r: 205, g: 255, b: 252 },
        children: [
          { shapeId: "fish-eyes", color: { r: 255, g: 255, b: 255 }, children: [] },
          {
            shapeId: "fish-fin",
            color: { r: 100, g: 66, b: 74 },
            children: [
              { shapeId: "fish-fin-part-1", color: { r: 93, g: 54, b: 55 }, children: [] },
              { shapeId: "fish-fin-part-2", color: { r: 33, g: 255, b: 255 }, children: [] },
              { shapeId: "fish-fin-part-3", color: { r: 128, g: 53, b: 255 }, children: [] },
            ],
          },
          { shapeId: "fish-tail", color: { r: 255, g: 5, b: 255 }, children: [] },
        ],
      },
      {
        shapeId: "duck",
        color: { r: 255, g: 255, b: 252 },
        children: [
          { shapeId: "duck-bill", color: { r: 255, g: 255, b: 255 }, children: [] },
          { shapeId: "duck-body", color: { r: 205, g: 255, b: 252 }, children: [] },
          { shapeId: "duck-legs", color: { r: 100, g: 255, b: 252 }, children: [] },
        ],
      },
    ],
  })
}
