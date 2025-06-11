import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Icon from "../common/icon";
import { AdminProfile, AdminSearchBar } from ".";
import { ModeToggle } from "../layout/mode-toggle";

export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between py-3">
      <div className="flex items-center gap-4 flex-grow">
        <div className="space-x-2">
          <Button variant="ghost">
            <Icon icon={ArrowLeftIcon} />
          </Button>
          <Button variant="ghost">
            <Icon icon={ArrowRightIcon} />
          </Button>
        </div>
        <AdminSearchBar />
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button variant="ghost">
          <Icon icon={BellIcon} />
        </Button>
        <Button variant="ghost">
          <Icon icon={SettingsIcon} />
        </Button>
        <AdminProfile />
      </div>
    </header>
  );
}
