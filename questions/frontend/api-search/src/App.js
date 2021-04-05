import { useState } from "react"

function mockFetch() {
  return new Promise((res) => setTimeout(() => res({ json: () => ({ hello: true }) }), 500))
}

export default function App() {
  const [cache, setCache] = useState({})
  const [term, setTerm] = useState("")
  const [wait, setWait] = useState(null)

  function handleChange(text, search = true) {
    clearTimeout(wait)
    setTerm(text)

    if (text.length > 3 && search) {
      setWait(
        setTimeout(async () => {
          if (!cache.hasOwnProperty(text)) {
            console.log("fetching")
            const req = await mockFetch()
            const res = req.json()
            setCache({ ...cache, [text]: res })
          }
        }, 500)
      )
    }
  }

  function handleSearch() {
    console.log("Searching for", term)
  }

  return (
    <div className="App" style={S.wrapper}>
      <div>
        <input value={term} onChange={(e) => handleChange(e.target.value)} />
        <button title="Search" onClick={handleSearch}>
          Search
        </button>
      </div>
      {cache.hasOwnProperty(term) &&
        Object.keys(cache[term]).map((val) => (
          <button key={val} onClick={() => handleChange(val, false)}>
            {val}
          </button>
        ))}
    </div>
  )
}

const S = {
  wrapper: {
    height: `100vh`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}
