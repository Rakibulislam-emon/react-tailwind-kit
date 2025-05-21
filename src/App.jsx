import Cart from "./components/cart/Cart";
import CartSummary from "./components/cart/CartSummary";
import Layout from "./components/layout/Layout";
import ProductGrid from "./components/product/ProductGrid";
import ProductSort from "./components/product/ProductSort";
import Newsletter from "./components/ui/Newsletter";

export default function App() {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="col-span-2">
            <ProductSort />
            <ProductGrid />
          </div>
          <div className="col-span-1 bg-white rounded-lg p-6 border border-gray-200">
            <Cart />
            <CartSummary />
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  );
}
