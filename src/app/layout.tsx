import type { Metadata } from "next";
import { Syne, Playfair_Display, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Bhalerao — AI & Product Builder | Team Lead",
  description:
    "Om Bhalerao is an Electronics & Computer Science student at SAKEC Mumbai building AI-powered products and leading teams that ship. Open to Summer 2027 internships.",
  keywords: [
    "Om Bhalerao",
    "SAKEC Mumbai",
    "Product Management",
    "AI Product Builder",
    "Fintech Operations",
    "Bridge IT",
    "Cafe La Roche",
    "Aegis-Match",
  ],
  authors: [{ name: "Om Kundalik Bhalerao" }],
  openGraph: {
    title: "Om Bhalerao — AI & Product Builder | Team Lead",
    description: "I build AI-powered products and lead the teams that ship them.",
    url: "https://ombhalerao.vercel.app",
    siteName: "Om Bhalerao Portfolio",
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
      suppressHydrationWarning
      className={`${syne.variable} ${playfair.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-secondary/20 selection:text-secondary transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
