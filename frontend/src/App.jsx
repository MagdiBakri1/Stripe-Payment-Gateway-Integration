
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
const App = () => {
  const products = [
    {
      id: 1,
      name: "React T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      price: 20,
    },
    {
      id: 2,
      name: "Classic Shoes",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
      price: 50,
    },
    {
      id: 3,
      name: "Black Hoodie",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      price: 35,
    },
    {
      id: 4,
      name: "Classic Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      price: 75,
    },
    {
      id: 5,
      name: "Backpack",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      price: 40,
    },
    {
      id: 6,
      name: "Sunglasses",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
      price: 25,
    },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-200 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">
              Stripe Store
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        }
      />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
};

export default App;
