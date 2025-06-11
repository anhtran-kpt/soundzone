import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import Icon from "../common/icon";

export default function AdminSearchBar() {
  return (
    <div className="flex items-center relative w-full max-w-md">
      <Input
        type="text"
        placeholder="What do you want to listen to?"
        className="w-full bg-transparent pl-10 pr-6 rounded-lg py-2"
      />
      <Icon icon={SearchIcon} className="absolute left-3" />
    </div>
  );
}
