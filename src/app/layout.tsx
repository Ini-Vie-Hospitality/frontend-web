import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalyticsEvents } from "@/components/analytics/analytics-events";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ConciergeChat } from "@/components/ui/concierge/concierge-chat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ini Vie Hospitality | Stay Beyond The Ordinary",
  description: "Thoughtfully designed stays and experiences across Bali's most inspiring destinations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ConciergeChat />
        <AnalyticsEvents />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
