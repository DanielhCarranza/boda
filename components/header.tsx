"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

export default function Header() {
  const scrolled = useScroll(115);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${scrolled
            ? "bg-white/10 backdrop-blur-md"
            : "bg-white/0 text-white"
          } z-30 transition-all`}
      >
        <div className="mx-5 flex py-3 h-16 max-w-screen-2xl items-center justify-between w-full">
            <div className="flex items-center justify-center w-full">
                <h2 className="text-center font-greatVibes text-2xl">Zaira & Abhigael</h2>
            </div>
        </div>
      </div>
    </>
  )
}