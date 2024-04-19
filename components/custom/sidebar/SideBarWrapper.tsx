"use client"
import { BsTwitter } from "react-icons/bs"
import { SideBarSingle } from "@/components/custom/sidebar/SideBar"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "../userProfile/UserAvatar"
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { ReactNode } from "react";
import { useCurrentUser } from "@/hooks/userHooks";

interface TwitterSidebarButton {
  title: string;
  icon: ReactNode
  href: string
}


export const SideBarWrapper = () => {
  const { user } = useCurrentUser()
  const sideBarMenuItems: TwitterSidebarButton[] = [
    {
      title: "Home",
      icon: <BiHomeCircle />,
      href: "/home"
    },
    {
      title: "Explore",
      icon: <BiHash />,
      href: "/home"

    }
    ,
    {
      title: "Notification",
      icon: <BsBell />,
      href: "/home"

    }
    ,
    {
      title: "Messages",
      icon: <BsEnvelope />,
      href: "/home"

    }
    ,
    {
      title: "Bookmarks",
      icon: <BsBookmark />,
      href: "/home"

    }
    ,
    {
      title: "Profile",
      icon: <BiUser />,
      href: `/profile?user=${user?.id}`
    }
    ,
    {
      title: "More",
      icon: <CgMoreO />,
      href: "/home"

    }
  ]
  return (
    <div className="col-span-3">
      <div className="h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
        <BsTwitter className="text-4xl" />
      </div>
      <div className="mt-5">
        {sideBarMenuItems.map((val, index) => (
          <SideBarSingle key={index} title={val.title} icon={val.icon} href={val.href} />
        ))}
        <div className="flex justify-start mt-5">
          <Button className="w-4/5 rounded-full">Tweet</Button>
        </div>
        <div>
          <UserAvatar />
        </div>
      </div>
    </div>
  )
}