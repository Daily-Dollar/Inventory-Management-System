import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          {/* Add more routes as needed */}
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
