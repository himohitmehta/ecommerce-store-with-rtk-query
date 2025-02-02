"use client"

import { addToCart } from "@/lib/store/cartSlice"
import { Product } from "@/lib/store/productsApi"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch()

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          unoptimized
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
      </Link>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <p className="text-xl font-bold mb-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-1">★</span>
        {/* <span>{product.rating.toFixed(1)}</span> */}
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}

