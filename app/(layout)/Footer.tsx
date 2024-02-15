import { version } from "@/package.json";

export default function Footer() {
  return (
    <footer className="bg-stone-950">
      <div className="mx-auto max-w-screen-xl p-4">
        <p className="text-xs text-stone-100">
          Yuval Gabian - web developer | Personal resume website about myself
          and my skills | Created with Next.js | Version {version}
        </p>
      </div>
    </footer>
  );
}
