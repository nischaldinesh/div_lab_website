import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIV Lab - Research Laboratory",
  description:
    "The Data Interaction and Visualization Lab, in short DIV-Lab is an interdisciplinary research laboratory located in the School of Computer Science at the University of Oklahoma, Norman. We specialize in Data Visualization, Perception and Cognition Science, Computer Graphics, and applied Artificial Intelligence. Our primary focus is on creating visual representations and interfaces that enhance understanding, interaction, and development of computational models.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        <main className="relative ml-[200px] w-[calc(100%-200px)] max-md:ml-0 max-md:w-full max-md:pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
