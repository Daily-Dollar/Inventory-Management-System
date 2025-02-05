
// Example stock products images
const stockProducts = [
  "https://via.placeholder.com/50?text=Cap",
  "https://via.placeholder.com/50?text=T-Shirt",
  "https://via.placeholder.com/50?text=Hat",
  "https://via.placeholder.com/50?text=Watch",
  "https://via.placeholder.com/50?text=Jacket",
];

const Overview = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold text-lg mb-2">Overview</h3>
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Products</p>
            <p className="text-xl font-bold">1240</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Stock</p>
            <p className="text-xl font-bold">325</p>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-xl font-bold">$12,400</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Profit</p>
            <p className="text-xl font-bold">$2,300</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Stock Products</h4>
        <div className="flex flex-wrap gap-2">
          {stockProducts.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index}`}
              className="h-12 w-12 rounded border"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
