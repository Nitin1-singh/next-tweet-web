"use client"
import { FeedCard } from "@/components/custom/feed/FeedCard";
import { SideBarWrapper } from "@/components/custom/sidebar/SideBarWrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { graphqlClient } from "@/graphql/client";
import { followUserMutation, unfollowUserMutation } from "@/graphql/mutation/user";
import { useCurrentUser, useGetUserByID } from "@/hooks/userHooks";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

export default function ProfileWrapper() {
  const queryClient = useQueryClient()
  const searchParams = useSearchParams()
  const id = searchParams.get("user")
  if (!id) return <div>No user found</div>

  const { user, isLoading } = useGetUserByID(id)
  const { user: currentUser } = useCurrentUser()

  const amIFollowing = useMemo(() => {
    if (!user) return false
    return (
      (currentUser?.following?.findIndex(
        (el) => el?.id === user.id) ?? -1 >= 0
      )
    )

  }, [currentUser?.following, user, currentUser?.follower])

  const handleFollow = useCallback(async () => {
    if (!user?.id) return
    await graphqlClient.request(followUserMutation, { to: id })
    await queryClient.invalidateQueries({ queryKey: ["current-user"] })
  }, [user?.id])

  const handleUnFollow = useCallback(async () => {
    if (!user?.id) return
    await graphqlClient.request(unfollowUserMutation, { to: id })
    await queryClient.invalidateQueries({ queryKey: ["current-user"] })

  }, [user?.id])

  if (isLoading) return <div>Loading...</div>
  if (user == null) return <div>No user found</div>

  return (
    <main className="w-3/4 mx-auto grid grid-cols-12">
      <div className="col-span-3 border-e-[0.3px] border-slate-500">
        <SideBarWrapper />
      </div>
      <nav className="flex flex-col col-span-6 mt-2  border-r-[0.3px] border-slate-500">
        <div className="flex flex-row">
          <BsArrowLeftShort className="text-4xl hover:bg-slate-700 hover:cursor-pointer rounded-full" />
          <div>
            <h1 className="font-bold text-2xl">Nitin Singh Negi</h1>
            <p className="text-md text-[#888]">{user?.tweets?.length} tweet</p>
          </div>
        </div>
        {user ?
          <div className="flex flex-col gap-5 mt-10 pb-10  border-b-[0.3px] border-slate-500">
            <Avatar className="w-full h-[200px] rounded-full">
              <AvatarFallback>
                CN
              </AvatarFallback>
              <AvatarImage className="w-full" alt="profile" src={user?.profile_img_url!} />
            </Avatar>
            <h1 className="text-2xl font-bold ms-5">{user.first_name} {user.last_name}</h1>
            <div className="flex text-sm ms-5 justify-between items-center me-5">
              <div className="flex gap-5">
                <span>{user.follower?.length} Followers</span>
                <span>{user.following?.length} Following</span>
              </div>
              <div>
                {id != currentUser?.id ?
                  amIFollowing ?
                    <Button onClick={handleFollow}>Follow</Button>
                    : <Button onClick={handleUnFollow}>Unfollow</Button>
                  : null
                }
              </div>
            </div>
          </div>
          : null
        }
        {
          user ?
            <div>
              {user.tweets?.map((tweet, index) => (
                <FeedCard id={tweet?.id} key={index} first_name={user.first_name} last_name={user.last_name} profile_img_url={user.profile_img_url!} content={tweet?.content} />
              ))}
            </div> : null
        }
      </nav>
    </main>
  )
}