import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/context/ToastContext";
import ScrollToAnchor from "@/components/common/ScrollToAnchor";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Bot Anica",
          "url": "https://anica.space",
          "logo": "https://anica.space/logo.png",
          "sameAs": [
            "https://t.me/bot_anica",
            "https://www.youtube.com/@bot_anica",
          ]
        })}
        </script>
      </head>
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
      <GoogleAnalytics gaId="G-DFZX7JHR55" />
    </html>
  );
}
