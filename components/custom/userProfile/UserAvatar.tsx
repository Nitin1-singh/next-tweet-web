"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useCurrentUser } from "@/hooks/userHooks"
import { AvatarImage } from "@radix-ui/react-avatar"

export function UserAvatar() {
  const { user } = useCurrentUser()

  if (user?.first_name)
    return (
      <div className="w-4/5 flex items-center mt-5 bg-slate-500 rounded-full px-2 py-1">
        <div className="me-3">
          <Avatar>
            <AvatarImage src={user.profile_img_url!} />
          </Avatar>
        </div>
        <div>
          <span>{user.first_name}</span>
          <span>{user.last_name}</span>
        </div>
      </div>
    )
}