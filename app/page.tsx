import { ChatWindow } from "@/chatbot/ChatWindow";
export default function Home() {
  return (
    <>
      <ChatWindow endpoint="api/chat"></ChatWindow>
    </>
  );
}
