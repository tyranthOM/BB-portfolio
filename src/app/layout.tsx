import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Bhalerao // Electronics & CS Engineer",
  description:
    "Second-year Electronics & Computer Science student at SAKEC Mumbai.Tactile web interfaces.",
  keywords: [
    "Om Bhalerao",
    "SAKEC Mumbai",
    "Electronics and Computer Science",

  ],
  authors: [{ name: "Om Bhalerao" }],
  openGraph: {
    title: "Om Bhalerao // Systems & Embedded Software",
    description: "Engineering systems from silicon to the web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
