import { Button } from "./ui/button";
import { ICON } from "@/icons/icons";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

export function ExportButton() {
  return (
    <div className="">
      <Button
        variant="outline"
        className="flex items-center justify-start gap-3"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "This feature cannot be used now",
            action: <ToastAction altText="Close">Close</ToastAction>,
          });
        }}
      >
        <ICON.CiExport size={20} />
        <span>Export</span>
      </Button>
    </div>
  );
}
