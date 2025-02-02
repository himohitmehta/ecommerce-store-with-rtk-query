"use client"

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/lib/store"
import { setCategory, setSortBy } from "@/lib/store/preferencesSlice"

export default function SortFilter() {
  const dispatch = useDispatch()
  const { sortBy, category } = useSelector((state: RootState) => state.preferences)

  return (
    <div className="flex space-x-4">
      <select value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))} className="p-2 border rounded">
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <select value={category} onChange={(e) => dispatch(setCategory(e.target.value))} className="p-2 border rounded">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>
    </div>
  )
}

