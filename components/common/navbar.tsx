"use client";

import { ModeToggle } from "./modeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex relative items-center justify-between w-full">
      {/* <SidebarTrigger className="absolute top-4 border border-l-0 rounded-l-none left-0" /> */}
      <div className="flex items-center justify-between w-full border-b py-4">
        <div className="flex items-center gap-10">
          <div className="link-div group">
            <Link href="/" className={cn(pathname === "/" ? "active-link" : "link")}>
              Leaderboard
              <div className={cn("absolute bg-primary w-0 h-1 bottom-0 left-0 group-hover:w-full duration-300", pathname === "/" ? "w-full" : "w-0 group-hover:w-full")}></div>
            </Link>
          </div>
          <div className="link-div group">
            <Link href="/" className={cn(pathname === "/" ? "active-link" : "link")}>
              Empty
              <div className={cn("absolute bg-primary w-0 h-1 bottom-0 left-0 group-hover:w-full duration-300", pathname === "/empty" ? "w-full" : "w-0 group-hover:w-full")}></div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
