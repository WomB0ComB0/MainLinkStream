import React, {useEffect, useState} from "react"
import { useSearchParams } from "react-router-dom"
function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "")
  useEffect(() => {
    setSearchParams({ query: searchTerm })
  }, [searchTerm, setSearchParams])
  return (
    <form className="">
      <input type="search" />
    </form>
  )
}
export default SearchBar