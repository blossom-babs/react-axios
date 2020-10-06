import Axios from "axios"
import React, { useState, useEffect } from "react"
import "../scss/app.scss"
import Header from "../components/Header"
import CharacterGrid from "../components/CharacterGrid"
import Search from "../components/Search"

export default function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchItem = async () => {
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItem()
  }, [query])
  return (
    <div>
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}
