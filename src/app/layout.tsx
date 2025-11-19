import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/context/ToastContext";
import ScrollToAnchor from "@/components/common/ScrollToAnchor";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Head from "next/head";

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
      <Head>
        {/* Cloudflare Web Analytics */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "115ca70baa5841afa78826ceca51a859"}'></script>
      </Head>
      <body className="min-h-screen flex flex-col">
        <SpeedInsights />
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
