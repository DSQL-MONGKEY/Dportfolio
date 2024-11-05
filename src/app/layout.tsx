import type { Metadata } from "next";
import "./globals.css";
import Layouts from "@/components/layouts";


export const metadata: Metadata = {
  title: "Dportfolio",
  description: "Created with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <main
          className={`flex h-screen flex-col md:flex-row md:overflow-hidden`}
        >
          <Layouts>
            {children}
          </Layouts>
        </main>
      </body>
    </html>
  );
}
