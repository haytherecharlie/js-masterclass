;(async () => {
  // const endpoints = generateIds()
  // const data = await getData()

  const testData = {
    shapeId: "duck",
    color: { r: 255, g: 255, b: 252 },
    children: [
      { shapeId: "duck-bill", color: { r: 255, g: 255, b: 255 }, children: [] },
      { shapeId: "duck-body", color: { r: 205, g: 255, b: 252 }, children: [] },
      { shapeId: "duck-legs", color: { r: 100, g: 255, b: 252 }, children: [] },
    ],
  }

  function getColorSum(obj, i) {
    let { color, children } = obj
    console.log("children", children)

    if (!children.length) {
      return [obj, i]
    }

    if (children.length) {
      children.forEach((child) => {
        return getColorSum({
          color: {
            r: child.color.r + obj.color.r,
            g: child.color.g + obj.color.g,
            b: child.color.b + obj.color.b,
          },
          children: child.children,
        })
      })
    }
  }

  console.log(getColorSum(testData))

  const objectSum = data.map(({ shapes }) => {
    const d = shapes.length
    return shapes.reduce((acc, val) => {
        acc.r += val.color.r
        acc.g += val.color.g
        acc.b += val.color.b
        return acc
      }, { r: 0, g: 0, b: 0 })
  })

  objectSum.map(([val, d], i) => {
    console.log(`Design ${i}: { r: ${val.r / d} g: ${val.g / d} b: ${val.b / d}  }`)
  })

  async function getData() {
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

  function generateIds() {
    const endpointArr = []
    for (let i = 1; i <= 10; i++) {
      endpointArr.push(fetchDesign(i))
    }
    return endpointArr
  }
})()

/**
 * 
In the previous part, we worked with a simplified document format. In actual fact shapes can contain other shapes.
Given this new document format, can you modify your algorithm to calculate the average colour of the designs?
An updated fetchDesign function has been provided.
function fetchDesign(id) {
  return Promise.resolve({
      designId: id,
      shapes: [
        {shapeId: 'basic-shape', color: { r: 55, g: 40, b: 255 }, children: []},
        {shapeId: 'duck', color: { r: 255, g: 255, b: 252 }, children: [
          {shapeId: 'duck-bill', color: { r: 255, g: 255, b: 255 }, children: []},
          {shapeId: 'duck-body', color: { r: 205, g: 255, b: 252 }, children: []},
          {shapeId: 'duck-legs', color: { r: 100, g: 255, b: 252 }, children: []},
        ]},
        {shapeId: 'zigzag-polygon', color: { r: 205, g: 255, b: 252 }, children: []},
        {shapeId: 'fish', color: { r: 205, g: 255, b: 252 }, children: [
          {shapeId: 'fish-eyes', color: { r: 255, g: 255, b: 255 }, children: []},
          {shapeId: 'fish-fin', color: { r: 100, g: 66, b: 74 }, children: [
            {shapeId: 'fish-fin-part-1', color: { r: 93, g: 54, b: 55 }, children: []},
            {shapeId: 'fish-fin-part-2', color: { r: 33, g: 255, b: 255 }, children: []},
            {shapeId: 'fish-fin-part-3', color: { r: 128, g: 53, b: 255 }, children: []},
          ]},
          {shapeId: 'fish-tail', color: { r: 255, g: 5, b: 255 }, children: []},
        ]},
        {shapeId: 'duck', color: { r: 255, g: 255, b: 252 }, children: [
          {shapeId: 'duck-bill', color: { r: 255, g: 255, b: 255 }, children: []},
          {shapeId: 'duck-body', color: { r: 205, g: 255, b: 252 }, children: []},
          {shapeId: 'duck-legs', color: { r: 100, g: 255, b: 252 }, children: []},
        ]},
      ]
  })
}

Sample Output
Design 1: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 2: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 3: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 4: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 5: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 6: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 7: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 8: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 9: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }
Design 10: { r: 174.05882352941177 g: 192.8235294117647 b: 231.1764705882353 }


 */
