import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import CustomCursor from "../components/desktop/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likith Kumar — EEE Engineer & Builder",
  description:
    "Portfolio of Likith Kumar — Electrical & Electronics Engineer, building with React, Next.js, Python and AI/ML.",
  openGraph: {
    title: "Likith Kumar — EEE Engineer & Builder",
    description:
      "Portfolio of Likith Kumar — Electrical & Electronics Engineer, building with React, Next.js, Python and AI/ML.",
    url: "https://kuki-boi.github.io/Personal-portfolio/",
    siteName: "Likith Kumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Likith Kumar — EEE Engineer & Builder",
    description:
      "Portfolio of Likith Kumar — Electrical & Electronics Engineer, building with React, Next.js, Python and AI/ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
