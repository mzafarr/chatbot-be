import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      showIngestForm={true}
    ></ChatWindow>
  );
}
