import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Icon from "../common/icon";
import { UserProfile, UserSearchBar } from ".";

export default function UserHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2 flex-grow">
        <Button variant="ghost">
          <Icon icon={ArrowLeftIcon} />
        </Button>
        <Button variant="ghost">
          <Icon icon={ArrowRightIcon} />
        </Button>
        <UserSearchBar />
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost">
          <Icon icon={SunIcon} />
        </Button>
        <Button variant="ghost">
          <Icon icon={BellIcon} />
        </Button>
        <Button variant="ghost">
          <Icon icon={SettingsIcon} />
        </Button>
        <UserProfile />
      </div>
    </header>
  );
}
