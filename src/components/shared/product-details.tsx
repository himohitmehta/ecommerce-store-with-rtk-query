"use client";

import { addToCart } from "@/lib/store/cartSlice";
import { useGetProductByIdQuery } from "@/lib/store/productsApi";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function ProductDetail({ id }: { id: number }) {
	const { data: product, error, isLoading } = useGetProductByIdQuery(id);
	const dispatch = useDispatch();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.toString()}</div>;
	if (!product) return <div>Product not found</div>;

	return (
		<div className="grid md:grid-cols-2 gap-8">
			<div>
				<Image
					src={product.image || "/placeholder.svg"}
					alt={product.name}
					width={500}
					height={500}
					unoptimized
					className="w-full h-auto object-cover rounded-lg"
				/>
			</div>
			<div>
				<h1 className="text-3xl font-bold mb-4">{product.name}</h1>
				<p className="text-gray-600 mb-4">{product.category}</p>
				<p className="text-2xl font-bold mb-4">
					${product.price.toFixed(2)}
				</p>
				<div className="flex items-center mb-4">
					<span className="text-yellow-500 mr-1">★</span>
					<span>{product.rating.toFixed(1)}</span>
				</div>
				<p className="mb-6">{product.description}</p>
				<button
					onClick={() => dispatch(addToCart(product))}
					className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
