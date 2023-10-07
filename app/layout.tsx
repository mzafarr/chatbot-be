import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>chatbot</title>
        <link rel="shortcut icon" href="" />
        <meta
          name="description"
          content="chatbot"
        />
        <meta property="og:title" content="chatbot" />
      </head>
      <body className={publicSans.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
