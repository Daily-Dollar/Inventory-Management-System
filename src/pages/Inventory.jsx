
const inventory = [
  {
    id: 1,
    name: "Cap",
    category: "Accessories",
    quantity: 100,
    price: "GHS 20",
    image: "https://via.placeholder.com/50?text=Cap",
  },
  {
    id: 2,
    name: "T-Shirt",
    category: "Apparel",
    quantity: 250,
    price: "GHS 35",
    image: "https://via.placeholder.com/50?text=T-Shirt",
  },
  {
    id: 3,
    name: "Hat",
    category: "Accessories",
    quantity: 150,
    price: "GHS 15",
    image: "https://via.placeholder.com/50?text=Hat",
  },
  {
    id: 4,
    name: "Watch",
    category: "Accessories",
    quantity: 75,
    price: "GHS 150",
    image: "https://via.placeholder.com/50?text=Watch",
  },
  {
    id: 5,
    name: "Jacket",
    category: "Apparel",
    quantity: 60,
    price: "GHS 200",
    image: "https://via.placeholder.com/50?text=Jacket",
  },
];

const Inventory = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Inventory</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Stock
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    {item.name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {item.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
