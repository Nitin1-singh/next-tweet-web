import { GoogleLoginBtn } from "@/components/custom/btn/GoogleLoginBtn";
import { FeedCardWrapper } from "@/components/custom/feed/FeedCardWrapper";
import { FeedMessage } from "@/components/custom/feed/FeedMessage";
import { SideBarWrapper } from "@/components/custom/sidebar/SideBarWrapper";
export default function Home() {
  return (
    <main className="flex flex-row justify-center">
      <section className="grid grid-cols-12 h-screen w-3/4 justify-center" >
        <SideBarWrapper />
        <div className="col-span-6 border-x-[1px] border-slate-800">
          <FeedMessage />
          <FeedCardWrapper />
        </div>
        <div className="col-span-3">
          <GoogleLoginBtn />
        </div>
      </section>
    </main>
  )
}