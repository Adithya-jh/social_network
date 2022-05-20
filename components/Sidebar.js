import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,

} from "@heroicons/react/outline";

import {TiGroupOutline} from "react-icons/ti"
import SidebarLink from "./SidebarLink";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        {/* <Image src="https://rb.gy/ogau5a" width={30} height={30} /> */}
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">

        <SidebarLink text="Home" Icon={HomeIcon} active />
        <Link href="/explore">
         <a><SidebarLink text="Explore" Icon={HashtagIcon} /></a> 
        </Link>
        
        <SidebarLink text="Community" Icon={TiGroupOutline} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Clubs" Icon={BookmarkIcon} />
        <SidebarLink text="Activity" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#6a1edb] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#6534e0]">
        NETWORK
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
