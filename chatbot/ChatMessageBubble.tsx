import type { Message } from "ai/react";

export function ChatMessageBubble(props: { message: Message, aiEmoji?: string }) {
  const colorClassName =
    props.message.role === "user" ? "bg-indigo-600 text-white" : "bg-indigo-400 text-white";
  const alignmentClassName =
    props.message.role === "user" ? "ml-auto" : "mr-auto";
  return (
    <div
      className={`${alignmentClassName} ${colorClassName}  border rounded-md px-4 py-2 max-w-[80%] mb-4 flex`}
    >
      <div className="whitespace-pre-wrap">
        {props.message.content}
      </div>
    </div>
  );
}