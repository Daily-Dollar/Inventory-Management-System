import PropTypes from "prop-types";


import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#f1f5f9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content (scrollable) */}
        <div className="flex-1 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired
  };

export default DashboardLayout;
