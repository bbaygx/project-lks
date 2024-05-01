import { BACKEND_BASE_URL } from "@/api/api";
import { PromptAi } from "@/components/ai/prompt-ai";
import { PromptUser } from "@/components/ai/prompt-user";
import { AvatarUser } from "@/components/avatar-user";
import { ExportButton } from "@/components/export-button";
import { NavigationTop } from "@/components/navigation-top";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

import { useAuth } from "@/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useState } from "react";
import { FiCornerDownLeft } from "react-icons/fi";
import BotAsisten from "@/assets/bot.png";
import { NavigationTopMobile } from "@/components/navigation-top-mobile";

export default function Home() {
  const [valueType, setValueType] = useState("");
  const { data, isLoading } = useAuth();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (message: string) =>
      axios
        .post(`${BACKEND_BASE_URL}/ai`, message, {
          withCredentials: true,
        })
        .then((res) => res.data as { message: string }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
  if (isLoading) return <div>Loading User Data...</div>;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValueType("");
    // @ts-ignore
    mutate({
      message: valueType,
    });
  };

  return (
    <div className="">
      <div className="flex">
        <aside className="hidden md:flex md:h-screen md:fixed">
          <NavigationTop />
        </aside>
        <div className="flex flex-col md:ml-64 w-full">
          <nav className="sticky z-10 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 top-0 px-4 py-3 flex justify-between  border-b h-[3.75rem]">
            <NavigationTopMobile />
            <ExportButton />
            <AvatarUser />
          </nav>
          <main className=" container my-16 h-full">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              data?.data?.message?.map((item: any, i: number) => (
                <div key={i}>
                  <div className="py-6">
                    {isPending ? (
                      <div className="flex space-x-4">
                        <div className="">
                          <Avatar>
                            <AvatarImage
                              src={`${BACKEND_BASE_URL}${data?.data?.profilePic}`}
                            />
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-col space-y-3">
                          <Skeleton className="h-4 w-96 rounded-md" />
                          <Skeleton className="h-4 w-96 rounded-md" />
                          <Skeleton className="h-4 w-96 rounded-md" />
                        </div>
                      </div>
                    ) : (
                      <PromptUser
                        message={valueType}
                        question={item?.question}
                      />
                    )}
                  </div>
                  <div className="py-6">
                    {isPending ? (
                      <div className="flex space-x-4">
                        <div className="">
                          <Avatar>
                            <AvatarImage src={BotAsisten} />
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-col space-y-3">
                          <Skeleton className="h-4 w-96 rounded-md" />
                          <Skeleton className="h-4 w-96 rounded-md" />
                          <Skeleton className="h-4 w-96 rounded-md" />
                        </div>
                      </div>
                    ) : (
                      <PromptAi answer={item?.answer} />
                    )}
                  </div>
                </div>
              ))
            )}
          </main>
          <div className=" fixed border z-50 bottom-0 w-[100%] md:w-[80%] bg-white border-l ">
            {/* <PromptType setValueType={setValueType} valueType={valueType} /> */}

            <div className="relative flex  flex-col rounded-xl  p-4 lg:col-span-2">
              <div className="flex-1" />
              <div className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className=" resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                  onChange={(e) => setValueType(e.target.value)}
                  value={valueType}
                />

                <div className="flex items-center p-3 pt-0">
                  <Button
                    type="submit"
                    size="sm"
                    className="ml-auto gap-1.5"
                    onClick={handleSubmit}
                    disabled={isPending}
                  >
                    Send Message
                    <FiCornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
