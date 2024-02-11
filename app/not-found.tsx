"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [router]);

  return <div />;
}
