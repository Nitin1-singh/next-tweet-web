import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { FeedButtons } from "./FeedButton";
import Link from "next/link";

interface prop {
  id: string | undefined
  first_name: string | undefined
  last_name: string | undefined | null
  profile_img_url: string | undefined
  img_url?: string | undefined | null
  content: string | undefined
}
export const FeedCard = ({ first_name, last_name, profile_img_url, content, img_url, id }: prop) => {

  return (
    <div className="border border-x-0 border-t-0 border-gray-500 p-2 hover:bg-slate-700 transition-all hover:cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Avatar>
            <AvatarImage src={profile_img_url} alt="user image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-11 ps-4">
          <Link href={`/profile?user=${id}`}>
            <p>{first_name} {last_name}</p>
          </Link>
          {
            img_url ?
              <Avatar className="w-96 h-56 rounded-none py-3">
                <AvatarImage src={img_url} alt="user image" />
                <AvatarFallback className="rounded-none">CN</AvatarFallback>
              </Avatar>
              : null}
          <p className="py-1">{content}</p>
          <FeedButtons />
        </div>
      </div>
    </div>
  )
}