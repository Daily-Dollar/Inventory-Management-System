import InventoryTable from "../components/InventoryTable"
import Overview from "../components/Overview"
import PieChart from "../components/PieChart"
import BarGraph from "../components/BarGraph"

const Dashboard = () => {
  return (
    <div className=" flex-col md:flex-row gap-4">
        <Overview/>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
        {/* Pie chart takes 1/3 width */}
        <div className="md:w-1/3">
          <PieChart />
        </div>
        {/* Bar graph takes 2/3 width */}
        <div className="md:w-2/3">
          <BarGraph />
        </div>
      </div>
        <div className="flex-1 bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-4">Inventory</h2>
            <InventoryTable />
        </div>

      {/* Overview panel */}
    </div>
  )
}

export default Dashboard