import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/context/ToastContext";
import ScrollToAnchor from "@/components/common/ScrollToAnchor";

export const metadata: Metadata = {
  title: "Bot Anica",
  description: "Course landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <ToastProvider>
          <ScrollToAnchor />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
