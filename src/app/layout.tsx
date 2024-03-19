import type { Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--mono-font",
});

export const viewport: Viewport = {
  themeColor: "#9D8AE9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_mono.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
