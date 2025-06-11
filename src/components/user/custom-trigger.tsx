import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { Icon } from "../common";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function CustomTrigger() {
  const { toggleSidebar, state } = useSidebar();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleSidebar}
      className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 size-6 rounded-full"
    >
      {state === "collapsed" ? (
        <Icon icon={ChevronRightIcon} className="size-4" />
      ) : (
        <Icon icon={ChevronLeftIcon} className="size-4" />
      )}
    </Button>
  );
}
