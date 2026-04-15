import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TICKET R | Digital Enforcement & SOS Portal",
  description:
    "Paperless vehicle compliance and emergency recovery ecosystem for the Nigerian roads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${michroma.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      // This stops browser extensions from breaking the hydration
      suppressHydrationWarning
    >
      <body className="bg-[#FBF9F6] text-black min-h-full flex flex-col font-sans selection:bg-[#008000] selection:text-white">
        {children}
      </body>
    </html>
  );
}
