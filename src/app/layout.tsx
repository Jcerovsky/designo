import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import React from "react";
import ContextProvider from "@/app/context/Context";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FooterAttribute from "@/app/components/FooterAttribute";

const jost = Jost({ weight: ["200", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo",
  description: "Award winning custom designs and digital branding solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={`${jost.className} content-box ml-auto mr-auto`}>
          <Header />
          {children}
          <Footer />
          <FooterAttribute />
        </body>
      </ContextProvider>
    </html>
  );
}
