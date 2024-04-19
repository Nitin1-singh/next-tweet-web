"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useCurrentUser } from "@/hooks/userHooks"
import { BiImageAlt } from "react-icons/bi"
import { useCallback, useRef, useState } from "react"
import { useMutateTweet } from "@/hooks/useTweetHook"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "@/services/store"
import toast from "react-hot-toast"

export function FeedMessage() {

  const content = useRef<HTMLTextAreaElement>(null)
  const [img, setImg] = useState<null | string>(null)
  const { mutate } = useMutateTweet()
  const { user } = useCurrentUser()

  const handleImageClick = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault()
      toast.loading("uploading Image", { id: "22" })
      const file: File | null | undefined = input.files?.item(0)
      if (!file) return;
      const storageRef = ref(storage, `image/${file.name + Date.now().toString()}`)
      const snap = await uploadBytes(storageRef, file)
      const downloadRef = await getDownloadURL(storageRef)
      setImg(downloadRef)
      toast.success("uploaded image", { id: "22" })

    }
  }, [])
  const handleImage = async () => {

    const input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/*")
    const handleFn = handleImageClick(input)
    input.addEventListener("change", handleFn)
    input.click()

  }

  const handleTweet = useCallback(() => {
    mutate({ content: content.current?.value!, image_url: img })
  }, [content, img])

  return (
    <div className="my-5 ms-2 me-4  border-b-1 border-slate-600">
      <div className="flex flex-row gap-2">
        <div>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
            <AvatarImage src={user?.profile_img_url!} />
          </Avatar>
        </div>
        <div className="w-full flex flex-col gap-5">
          <Textarea ref={content} placeholder="What happings?" />
          {img ?
            <Avatar className="w-96 h-56 rounded-none">
              <AvatarFallback className="rounded-none">CN</AvatarFallback>
              <AvatarImage src={img} />
            </Avatar>
            : null}
          <div className="flex flex-row justify-between items-center">
            <BiImageAlt className="hover:cursor-pointer" onClick={handleImage} />
            <Button onClick={handleTweet} className="bg-blue-600 text-white rounded-full hover:bg-slate-700" >Tweet</Button>
          </div>
        </div>
      </div>
    </div>
  )
}