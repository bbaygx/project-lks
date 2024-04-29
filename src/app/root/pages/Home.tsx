import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ICON } from "@/icons/icons";
import { FiCornerDownLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import BotAsisten from "@/assets/bot.png";

export default function Home() {
  return (
    <div className="grid md:grid-cols-[220px_1fr] min-h-screen lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/">
              <span className="font-semibold text-xl">LKS Chat AI</span>
            </Link>
          </div>

          <div className="flex-1 lg:px-4">
            <nav className="grid py-5 items-center px-2 text-sm font-medium ">
              <Button className="flex justify-start w-32 gap-5 items-center">
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
      <div className="flex flex-col">
        <header className="flex justify-between h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
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
                <Button className="flex justify-start w-32 gap-5 items-center">
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

          <div className="">
            <Button
              variant="outline"
              className="flex items-center justify-start gap-3"
            >
              <ICON.CiExport size={20} />
              <span>Export</span>
            </Button>
          </div>
          <div className="">
            <Avatar>
              <AvatarFallback>UI</AvatarFallback>
              <AvatarImage src="" />
            </Avatar>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6">
          {/* <div className="">
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-400 via-10% to-orange-600 to-20% font-extrabold bg-clip-text text-5xl text-transparent">
              Hello, Saika
            </h1>
            <h4 className="text-2xl text-gray-400 py-2 font-extrabold">
              How can I help you today?
            </h4>
          </div> */}
          <div className="flex-1 max-w-3xl space-y-12 mx-auto">
            <div className="flex gap-4" id="chat-ai">
              <Avatar>
                <AvatarImage src={BotAsisten} />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="max-w-2xl" id="propmt">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae voluptate eius laborum beatae aspernatur fugit
                  illum ab, illo impedit commodi iure. Consequatur eos inventore
                  doloribus vero aliquam blanditiis atque facere.
                </h1>
              </div>
            </div>
            <div className="flex gap-4" id="chat-user">
              <Avatar>
                {/* <AvatarImage src={BotAsisten} /> */}
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              <div className="max-w-2xl" id="propmt">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae voluptate eius laborum beatae aspernatur fugit
                  illum ab, illo impedit commodi iure. Consequatur eos inventore
                  doloribus vero aliquam blanditiis atque facere.
                </h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="relative flex h-full  flex-col rounded-xl  p-4 lg:col-span-2">
              <div className="flex-1" />
              <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                x-chunk="dashboard-03-chunk-1"
              >
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className=" resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />

                <div className="flex items-center p-3 pt-0">
                  <div className="">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <ICON.CiMicrophoneOn size={25} />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Use microphone</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <FiCornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
