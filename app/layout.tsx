import type { Metadata } from "next";
import React from "react";
// import { Inter } from "next/font/google";
import { COMPANY_NAME, COMPANY_TITLE } from "@/var";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${COMPANY_NAME} ${COMPANY_TITLE}`,
  description: `${COMPANY_NAME} ${COMPANY_TITLE}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
