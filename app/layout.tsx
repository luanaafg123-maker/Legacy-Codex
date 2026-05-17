import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legacy Codex",
  description: "A archive of digital relics",
  keywords: ["hardware", "vintage", "tech", "archive", "collection"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
