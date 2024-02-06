import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <h1 className="text-3xl font-bold mb-4">My Business Card</h1>;
}
