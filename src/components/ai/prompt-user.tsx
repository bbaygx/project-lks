import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { BACKEND_BASE_URL } from "@/api/api";

export function PromptUser({ question }: { message: string; question: any }) {
  const { data, isLoading } = useAuth();
  if (isLoading)
    return (
      <div className="">
        <Skeleton className="h-12 w-12 rounded-full" />
      </div>
    );

  return (
    <div className="flex gap-4" id="chat-user">
      <Avatar>
        <AvatarImage src={`${BACKEND_BASE_URL}${data?.data?.profilePic}`} />
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
      <div className="py-2" id="propmt">
        {question}
      </div>
    </div>
  );
}
