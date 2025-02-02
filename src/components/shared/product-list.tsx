"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/lib/store"
import { useGetProductsQuery } from "@/lib/store/productsApi"
import ProductCard from "./product-card"


export default function ProductList() {
  const { sortBy, category } = useSelector((state: RootState) => state.preferences)
  const { data: products, error, isLoading } = useGetProductsQuery({ page: 1, limit: 12, sort: sortBy, category, seed:1212 })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.toString()}</div>
  if (!products) return <div>No products found</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

