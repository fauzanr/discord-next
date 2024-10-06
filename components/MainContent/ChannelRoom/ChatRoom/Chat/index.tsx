import { Chat as ChatType } from "@/data/types";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import React from "react";

const Chat = ({ chat, textOnly }: { chat: ChatType; textOnly?: boolean }) => {
  const { username, timestamp, message, isAdmin } = chat;
  const date = timestamp ? format(timestamp, "MM/dd/yyyy hh:mm a") : "";
  return (
    <div
      className={cn(
        "flex w-full gap-3 px-3 py-1 mt-2 hover:backdrop-brightness-90",
        { "mt-0": textOnly }
      )}
    >
      <div
        className={cn("flex-none rounded-full w-9 h-9 bg-indigo-500", {
          "h-0": textOnly,
        })}
      ></div>
      <div className="flex flex-col flex-auto">
        {!textOnly && (
          <div className="flex items-baseline gap-1">
            <span
              className={cn("text-sm", {
                "text-emerald-400": isAdmin,
                "text-white": !isAdmin,
              })}
            >
              {username}
            </span>
            <span className="text-xs text-wh2" suppressHydrationWarning>
              {date}
            </span>
          </div>
        )}
        <div className="text-wh1 text-sm">{message}</div>
      </div>
    </div>
  );
};

export default Chat;
