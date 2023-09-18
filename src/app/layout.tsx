import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Nacion",
  description: "Especiales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://especiales.lanacion.com.ar/arc-css/css/site.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
