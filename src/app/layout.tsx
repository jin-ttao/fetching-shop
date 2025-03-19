import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TanStackQueryProvider from "@/context/TanStackQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fetching Shop",
  description: "online shop with fetching",
  keywords: ["fetching", "shop", "online", "shopping"],
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanStackQueryProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </TanStackQueryProvider>
    </html>
  );
}
