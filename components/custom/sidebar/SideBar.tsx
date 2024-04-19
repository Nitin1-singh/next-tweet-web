import Link from "next/link";
import React, { ReactNode } from "react";
interface TwitterSidebarButton {
  title: string;
  icon: ReactNode
  href: string
}

export const SideBarSingle: React.FC<TwitterSidebarButton> = ({ title, icon, href }) => {
  return (
    <div className="flex flex-row items-end hover:bg-slate-800 hover:cursor-pointer transition-all w-fit rounded-full px-3 py-2 mt-1">
      <Link className="flex gap-4" href={href}>
        <span className="text-2xl">{icon}</span>
        <span className="text-md font-bold text-end">{title}</span>
      </Link>
    </div>
  )
}