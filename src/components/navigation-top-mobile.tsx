import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ICON } from "@/icons/icons";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

export function NavigationTopMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <ICON.HiMenu size={20} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col py-12">
        <SheetHeader>
          <div className="">
            <h1 className="text-2xl font-bold">LKS Chat AI</h1>
          </div>
          <span className="text-sm">
            Unleash the power of AI with our innovative web apps.
          </span>
        </SheetHeader>
        <div className="flex flex-1 flex-col">
          <Button
            className="flex justify-start w-32 gap-5 items-center"
            onClick={() => {
              toast({
                title: "Uh oh! Something went wrong.",
                description: "This feature cannot be used now",
                action: <ToastAction altText="Close">Close</ToastAction>,
              });
            }}
          >
            <ICON.FaPlus size={25} />
            <span>New Chat</span>
          </Button>
          <div className="mt-12 px-2">
            <div className="">
              <h3 className="py-3">Recent</h3>

              <div className="flex flex-col gap-2 ">
                {/* map here */}
                <Button
                  variant="secondary"
                  className="flex justify-start gap-3 items-center text-gray-700"
                  onClick={() => {
                    toast({
                      title: "Uh oh! Something went wrong.",
                      description: "This feature cannot be used now",
                      action: <ToastAction altText="Close">Close</ToastAction>,
                    });
                  }}
                >
                  <ICON.BiMessageSquare size={21} />
                  <span>Elysia & Zod Validation</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
