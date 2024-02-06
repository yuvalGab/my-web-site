import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(layout)/Header";
import Footer from "./(layout)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "<MyWebSite />",
    template: "%s | <MyWebSite />",
  },
  description: "personal resume website about myself and my skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
