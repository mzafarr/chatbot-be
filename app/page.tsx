import { ChatWindow } from "@/components/ChatWindow";
// import Image from "next/image";
// import logo from "../public/images/logo.webp";
export default function Home() {
  return (
    <>
     {/* <div className="z-10 absolute top-0 left-0 p-4 md:p-6 rounded bg-black w-full flex justify-between items-center">
      <h1 className="text-3xl md:text-4xl">
      MASTER AI
      </h1>
        <Image src={logo} alt="logo" width={80} height={80} />
      <button className="rounded-full bg-white p-2 px-6 text-black">New Topic</button>
    </div>
    <ul className="flex z-10 mt-6 items-center justify-between bg-transparent text-black">
      <li>🧠 Ask complex question</li>
      <li>💡 Discover unlimited possibilities</li>
      <li>❤️ Unlock your full potential</li>
    </ul> */}
    <ChatWindow
      endpoint="api/chat"
      // emptyStateComponent={InfoCard}
      ></ChatWindow>
      </>
  );
}
