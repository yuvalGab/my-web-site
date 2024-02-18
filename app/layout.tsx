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
        <div className="flex flex-col min-h-screen pt-[5rem] md:pt-[3.5rem] bg-gradient-to-r from-stone-100 via-stone-200 to-stone-300 text-stone-950">
          <Header />
          <main className="flex-grow pb-8">
            <div className="mx-auto max-w-screen-xl p-4">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
