"use client"
import { useGetAllTweets } from "@/hooks/useTweetHook";
import { FeedCard } from "./FeedCard";
export function FeedCardWrapper() {
  const { tweets } = useGetAllTweets()
  return (
    <div>
      {tweets?.map((tweet, index) => (
        <FeedCard key={index} id={tweet?.author?.id} img_url={tweet?.image_url} content={tweet?.content} first_name={tweet?.author?.first_name} last_name={tweet?.author?.last_name} profile_img_url={tweet?.author?.profile_img_url!} />
      )
      )
      }
    </div>
  )
}