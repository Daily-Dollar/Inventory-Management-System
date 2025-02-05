
// Example static data
const products = [
  { id: 1, product: "Cap", category: "Men's Clothing", price: "$10", stock: 25 },
  { id: 2, product: "2 Color T-Shirt", category: "Men's Clothing", price: "$15", stock: 40 },
  { id: 3, product: "Polo Hat", category: "Men's Clothing", price: "$12", stock: 20 },
  { id: 4, product: "Jacket", category: "Men's Clothing", price: "$50", stock: 15 },
  { id: 5, product: "Collection", category: "Men's Clothing", price: "$100", stock: 5 },
  { id: 6, product: "Female T-Shirt", category: "Women's Clothing", price: "$18", stock: 30 },
  { id: 7, product: "Female Jeans", category: "Women's Clothing", price: "$25", stock: 20 },
  { id: 8, product: "Watch", category: "Accessories", price: "$40", stock: 10 },
];

const InventoryTable = () => {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="py-2 px-4">Product</th>
          <th className="py-2 px-4">Category</th>
          <th className="py-2 px-4">Price</th>
          <th className="py-2 px-4">Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-2 px-4">{item.product}</td>
            <td className="py-2 px-4">{item.category}</td>
            <td className="py-2 px-4">{item.price}</td>
            <td className="py-2 px-4">{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
