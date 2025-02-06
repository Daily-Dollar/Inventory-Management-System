import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import {
  ClipboardDocumentListIcon,
  UserIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

// Data for navigation items
const navItems = [
  { to: "/", label: "Dashboard", icon: <MdOutlineDashboard className="h-6 w-6 mr-3" /> },
  { to: "/inventory", label: "Inventory", icon: <ClipboardDocumentListIcon className="h-6 w-6 mr-3" /> },
  { to: "/orders", label: "Orders", icon: <ClipboardDocumentListIcon className="h-6 w-6 mr-3" /> },
];

const Sidebar = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
  const navItemRefs = useRef([]);
  
  // Ensure the ref array has the same length as navItems
  navItemRefs.current = [];
  const addToRefs = (el) => {
    if (el && !navItemRefs.current.includes(el)) {
      navItemRefs.current.push(el);
    }
  };
  
  // Update indicator when location changes
  useEffect(() => {
    // Find the index of the active nav item by matching the path
    const activeIndex = navItems.findIndex(item => {
      // Use exact matching for "/" route or startsWith for nested routes if needed
      return item.to === location.pathname;
    });
    
    if (activeIndex !== -1 && navItemRefs.current[activeIndex]) {
      const { offsetTop, clientHeight } = navItemRefs.current[activeIndex];
      setIndicatorStyle({ top: offsetTop, height: clientHeight });
    }
  }, [location.pathname]);
  
  return (
    <div className="w-64 md:w-64 bg-white flex flex-col transition-all duration-300 relative font-semibold">
      <div className="p-4 text-3xl font-bold text-gray-800 border-gray-200">
        <span className="text-[var(--color-primary)]">Sales</span>Hub
      </div>
      
      <nav className="flex-1 px-2 py-4 overflow-y-auto relative">
        {/* Sliding indicator */}
        <div
          className="absolute left-0 w-1 bg-[var(--color-primary)] transition-all duration-300"
          style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
        />
        
        <ul className="space-y-2">
          {navItems.map(({ to, label, icon }, index) => (
            <li key={index} ref={addToRefs}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `group flex items-center p-2 rounded-md transition-colors duration-300
                    ${isActive ? "text-[var(--color-primary)]" : "text-gray-600"}`
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
          {/* Other non-routing items can remain as buttons */}
          <li>
            <button className="group flex items-center w-full p-2 rounded-md text-gray-600 transition-colors duration-300">
              <UserIcon className="h-6 w-6 mr-3" />
              <span>Customers</span>
            </button>
          </li>
          <li>
            <button className="group flex items-center w-full p-2 rounded-md text-gray-600 transition-colors duration-300">
              <CurrencyDollarIcon className="h-6 w-6 mr-3" />
              <span>Revenue</span>
            </button>
          </li>
          <li>
            <button className="group flex items-center w-full p-2 rounded-md text-gray-600 transition-colors duration-300">
              <ChartBarIcon className="h-6 w-6 mr-3" />
              <span>Growth</span>
            </button>
          </li>
          <li>
            <button className="group flex items-center w-full p-2 rounded-md text-gray-600 transition-colors duration-300">
              <DocumentTextIcon className="h-6 w-6 mr-3" />
              <span>Report</span>
            </button>
          </li>
          <li>
            <button className="group flex items-center w-full p-2 rounded-md text-gray-600 transition-colors duration-300">
              <Cog6ToothIcon className="h-6 w-6 mr-3" />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
