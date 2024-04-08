'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main className="bg-purple-200 w-screen h-screen flex justify-center items-center text-black">
       Main page
       <div>Go to Signup <Link href='/signup'>Page</Link></div>

       <Button className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("dark")}>dark</Button>
       <Button className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("light")}>light</Button>

    </main>
  );
}
