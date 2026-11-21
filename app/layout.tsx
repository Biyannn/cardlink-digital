import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CardLink | Digital Business Card",
  description: "A clean, elegant digital business card profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}