// app/layout.tsx
import type { Metadata } from "next";
import { Lexend } from "next/font/google"; // Using the Lexend font
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// UPDATED METADATA
export const metadata: Metadata = {
  title: "Schools Daily MediaLabs",
  description: "Building the Future of Campus Connection. Based in Milwaukee, Wisconsin.",
  icons: {
    icon: "/logo.svg", // This line tells browsers to use your SVG as the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lexend.className} bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}