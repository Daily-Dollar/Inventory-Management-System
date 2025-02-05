import InventoryTable from "../components/InventoryTable";
import Overview from "../components/Overview";

const Inventory = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Main inventory table section */}
      <div className="flex-1 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Inventory</h2>
        <InventoryTable />
      </div>

      {/* Overview panel */}
      <div className="w-full md:w-1/3 bg-white p-4 rounded shadow h-fit">
        <Overview />
      </div>
    </div>
  );
};

export default Inventory;
