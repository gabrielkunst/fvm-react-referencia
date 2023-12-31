import { FiltersContainer } from "@/components/Products/FiltersContainer";
import { ProductsList } from "@/components/Products/ProductsList";

export function ProductsPage() {
	return (
		<div className="flex flex-col flex-1 p-5 sm:p-10 md:p-12 min-h-[calc(100svh-80px)] md:min-h-0">
			<FiltersContainer />
			<ProductsList />
		</div>
	);
}
