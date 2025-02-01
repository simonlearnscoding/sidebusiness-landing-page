import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seamless Web",
  description: "Your Vision is Our Mission",
  icons: { icon: "/favicon/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={" antialiased"}>{children}</body>
    </html>
  );
}
