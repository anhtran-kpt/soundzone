import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="flex items-center relative w-full max-w-md">
      <Input
        type="text"
        placeholder="What do you want to listen to?"
        className="w-full bg-transparent pl-10 pr-6 rounded-lg py-2"
      />
      <SearchIcon className="absolute left-3" />
    </div>
  );
}
