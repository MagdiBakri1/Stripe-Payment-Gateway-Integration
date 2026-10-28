
import axios from "axios";

const ProductCard = ({ product }) => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        { product }
      );

      window.location.href = response.data.url;
    } catch (error) {
    console.error("Checkout error:", error);
  console.error("Server response:", error.response?.data);

  alert(
    error.response?.data?.error ||
    error.message ||
    "Unknown checkout error"
  );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold text-gray-800 mt-4">
        {product.name}
      </h2>

      <p className="text-lg text-green-600 font-semibold mt-2">
        ${product.price}
      </p>

      <button
        type="button"
        onClick={handleCheckout}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg mt-4"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
