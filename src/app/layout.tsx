import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudarshan AI | Detect the Fake. Protect the Real.",
  description: "Advanced AI-powered deepfake detection & identity verification system for secure digital platforms.",
  keywords: ["deepfake detection", "identity verification", "Aadhaar verification", "AI security", "fraud prevention"],
  authors: [{ name: "Sudarshan AI Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "bg-deep-blue min-h-screen text-slate-200 antialiased")}>
        {children}
      </body>
    </html>
  );
}
