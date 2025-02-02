import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
	rating: number;
	images: Array<{
		url: string;
		title: string;
	}>;
	ean: string;
	upc: string;
	taxes: number;
	net_price: number;
}

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://fakerapi.it/api/v2/" }),
	endpoints: (builder) => ({
		getProducts: builder.query<
			Product[],
			{
				page: number;
				limit: number;
				sort?: string;
				category?: string;
				seed?: number;
			}
		>({
			query: ({ page, limit, sort, category, seed }) => {
				let url = `products?_quantity=${limit}&_page=${page}`;
				if (sort) url += `&_sort=${sort}`;
				if (category) url += `&_categories=${category}`;
				if (seed) url += `&_seed=${seed}`;
				return url;
			},
			transformResponse: (response: { data: Product[] }) => response.data,
		}),
		getProductById: builder.query<Product, number>({
			query: (id) => `products?_quantity=1&_seed=${id}`,
			transformResponse: (response: { data: Product[] }) =>
				response.data[0],
		}),
		searchProducts: builder.query<Product[], string>({
			query: (term) => `products?_quantity=5&_seed=${term}`,
			transformResponse: (response: { data: Product[] }) => response.data,
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useSearchProductsQuery,
} = productsApi;
