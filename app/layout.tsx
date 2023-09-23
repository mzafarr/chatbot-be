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
        <title>MASTER AI</title>
        <link rel="shortcut icon" href="/images/logo.webp" />
        <meta
          name="description"
          content="Enfiity - MASTER AI"
        />
        <meta property="og:title" content="Enfiity - MASTER AI" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
