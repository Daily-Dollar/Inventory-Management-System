import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between border-l-0">
      {/* Left side: Search box */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-xl">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-500 absolute left-3 top-3.5" />
          <input
            type="text"
            placeholder="Search inventory..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg outline-none 
                     hover:border-blue-200 focus:border-blue-400
                     transition-all duration-200 placeholder-gray-400 text-gray-700"
          />
        </div>

      </div>

      {/* Right side: User profile */}
      <div className="flex items-center space-x-3">
        <div className="text-right hidden md:block">
          <span className="text-gray-600 font-medium block group-hover:text-blue-600 transition-colors">
            John Doe
          </span>
          <span className="text-sm text-gray-400 block">Inventory Manager</span>
        </div>
        <div className="group relative">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="h-10 w-10 rounded-full border-2 border-white ring-2 ring-gray-200 
                     group-hover:ring-blue-300 transition-all duration-200 object-cover cursor-pointer"
          />
          <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </header>
  );
};

export default Header;