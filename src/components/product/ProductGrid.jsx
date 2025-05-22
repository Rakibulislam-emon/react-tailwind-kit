import productsData from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {productsData.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}
