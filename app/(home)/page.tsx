import { Metadata } from "next";
import AboutMe from "./AboutMe";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">My Business Card</h1>
      <AboutMe />
    </div>
  );
}
