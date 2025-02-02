"use client"

import { useDebounce } from "@/lib/hooks/use-debounce"
import { useSearchProductsQuery } from "@/lib/store/productsApi"
import { setSearchTerm } from "@/lib/store/searchSlice"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

export default function SearchBar() {
  const [term, setTerm] = useState("")
  const debouncedTerm = useDebounce(term, 300)
  const dispatch = useDispatch()
  const { data: suggestions } = useSearchProductsQuery(debouncedTerm, { skip: debouncedTerm.length < 3 })

  useEffect(() => {
    dispatch(setSearchTerm(debouncedTerm))
  }, [debouncedTerm, dispatch])

  return (
    <div className="relative">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border rounded"
      />
      {suggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded mt-1">
          {suggestions.map((product) => (
            <li key={product.id} className="p-2 hover:bg-gray-100 cursor-pointer">
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

