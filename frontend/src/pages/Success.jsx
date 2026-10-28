
export default function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700">
            Payment Successful!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for your purchase!
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Store
        </a>
      </div>
    </div>
  );
}
