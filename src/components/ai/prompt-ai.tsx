import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BotAsisten from "@/assets/bot.png";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";

// { message }: { message: string }
export function PromptAi({ answer }: { answer: any }) {
  const message = {
    result: answer,
  };

  return (
    <div className="flex gap-4" id="chat-ai">
      <Avatar>
        <AvatarImage src={BotAsisten} />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="max-w-3xl text-wrap overflow-x-hidden" id="propmt">
        <div className="py-2" id="">
          <Markdown
            children={message.result}
            components={{
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    customStyle={{ borderRadius: "10px" }}
                    language={match[1]}
                    PreTag="div"
                    style={synthwave84}
                    children={String(children).replace(/\n$/, "")}
                  />
                ) : (
                  <div className={className}>{children}</div>
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
    </div>
  );
}
