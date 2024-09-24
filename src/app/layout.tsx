import type { Metadata } from "next";
import { geistSans, geistMono } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cat Facts",
  description: "Cat facts on next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
