import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/context/ToastContext";

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
    <html lang="ru">
      <body>
        <ToastProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
