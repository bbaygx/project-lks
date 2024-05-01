import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ICON } from "@/icons/icons";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

export function NavigationTop() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/">
            <span className="font-semibold text-xl">LKS Chat AI</span>
          </Link>
        </div>

        <div className="flex-1 lg:px-4">
          <nav className="grid py-5 items-center px-2 text-sm font-medium ">
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
          </nav>
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

        {/* <div className="mt-auto lg:p-4">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support
              team.
            </CardDescription>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </CardHeader>
        </Card>
      </div> */}
      </div>
    </div>
  );
}
