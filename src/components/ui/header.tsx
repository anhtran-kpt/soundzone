import {
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-cyan-950 border-b border-primary-foreground flex items-center justify-between px-6 text-primary-foreground">
      {/* Left side - Breadcrumb */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      {/* Right side - Search, notifications, profile */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <SearchIcon
            className="absolute left-3 top-2.5 text-gray-500"
            size={18}
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <BellIcon size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            <UserRoundIcon size={16} />
          </div>
          <span className="text-sm font-medium">Admin</span>
          <ChevronDownIcon size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
