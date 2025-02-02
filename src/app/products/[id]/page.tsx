"use client";
import ProductDetailSkeleton from "@/components/shared/product-details-skeleton";
import { useGetProductsQuery } from "@/lib/store/productsApi";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductPage() {
	// Fetch product data based on params.id
	// ...fetching logic...
	const params = useParams();

	const {
		data: products,
		error,
		isLoading,
	} = useGetProductsQuery({ page: 1, limit: 12, seed: 1212 });

	const product = products?.find(
		(product) => product.id === Number(params.id),
	);
	// const product = {
	// 	id: params.id,
	// 	name: "Product Name",
	// 	description: "Product Description",
	// 	price: 19.99,
	// 	// images: ["/image1.jpg", "/image2.jpg"],
	// };

	if (isLoading) {
		return <ProductDetailSkeleton />;
	}
	if (error) {
		return <div>Error: {error.toString()}</div>;
	}
	if (product)
		return (
			<div>
				<h1>{product.name}</h1>
				<p>{product.description}</p>
				<p>${product.price}</p>
				<Image
					src={product.images[0].url || "/placeholder.svg"}
					alt={product.name}
					unoptimized
					width={500}
					height={500}
				/>
			</div>
		);
}
