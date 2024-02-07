import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">My Business Card</h1>
    </div>
  );
}
