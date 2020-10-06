import React, { useState } from "react"

function Search({ getQuery }) {
  const [text, setText] = useState("")

  function handleChange(q) {
    setText(q)
    getQuery(q)
  }

  return (
    <section className="search">
      <form>
        <input
          onChange={e => handleChange(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Search characters"
        />
      </form>
    </section>
  )
}

export default Search
