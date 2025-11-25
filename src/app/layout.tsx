import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/context/ToastContext";
import ScrollToAnchor from "@/components/common/ScrollToAnchor";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
    <html lang="ru" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-NTWNGH285K" />
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ToastProvider>
            <ScrollToAnchor />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
