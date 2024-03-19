import { Metadata } from "next";
import Image from "next/image";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import laptopDark from "@/public/images/laptop-dark.jpg";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">
        My Business Card
      </h1>
      <Image
        className="h-80 md:h-[28.5rem] object-cover rounded-md shadow-sm mb-6"
        src={laptopDark}
        alt="laptop dark"
        priority
      ></Image>
      <AboutMe />
      <ContactMe />
    </div>
  );
}
