import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanushka Patil - Portfolio",
  description: "A passionate full-stack developer and UI/UX enthusiast crafting beautiful, functional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />
      </head>
      <body className="light-theme">
        {children}
      </body>
    </html>
  );
}
