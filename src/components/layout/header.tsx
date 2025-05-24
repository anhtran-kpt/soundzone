import { BellIcon, SearchIcon } from "lucide-react";
import UserMenu from "@/components/layout/user-menu";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/layout/mode-toggle";

const Header = () => {
  return (
    <header className="h-16 bg-cyan-950 border-b border-primary-foreground flex items-center justify-between px-6 text-primary-foreground">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Tìm kiếm..."
            className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <SearchIcon
            className="absolute left-3 top-2.5 text-gray-500"
            size={18}
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <BellIcon size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <ModeToggle />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
