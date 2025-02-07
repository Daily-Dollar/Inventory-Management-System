import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* Add more routes as needed */}
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
