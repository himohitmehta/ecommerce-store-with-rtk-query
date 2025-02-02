import ProductList from "@/components/shared/product-list"
import ProductListSkeleton from "@/components/shared/product-list-skeleton"
import SearchBar from "@/components/shared/search-bar"
import SortFilter from "@/components/shared/sort-filter"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="mb-8">
        <SearchBar />
      </div>
      <div className="mb-8">
        <SortFilter />
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </main>
  )
}

