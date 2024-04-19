import { Button } from "@/components/ui/button";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

export const FeedButtons: React.FC = () => {
  return (
    <div className="flex flex-row justify-between mt-3">
      <Button variant="ghost" size="icon">
        <BiMessage className="text-xl" />
      </Button>
      <Button variant="ghost">
        <FaRetweet className="text-xl" />
      </Button>
      <Button variant="ghost">
        <AiOutlineHeart className="text-xl" />
      </Button>
      <Button variant="ghost">
        <BiUpload className="text-xl" />
      </Button>
    </div>
  )
}