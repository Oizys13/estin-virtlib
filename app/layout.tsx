import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESTIN VirtLib",
  description: "ESTIN Virtual Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </NextAuthProvider>
  )
}