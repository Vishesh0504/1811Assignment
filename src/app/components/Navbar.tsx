import React, { useContext } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AuthContext } from "@/app/Context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  let url;
  if (user) {
    url = user.picture;
  }
  return (
    <div className="flex ">
      <div className="flex-1 text-2xl font-semibold text-neutral-800">
        Projects
      </div>
      <div className="flex justify-center items-center gap-8">
        <button className="flex text-orange-600 font-semibold bg-orange-50 gap-2 px-4 py-2 border border-orange-400 rounded-md text-sm items-center mr-8">
          <Image src="/credit.svg" alt="icon" width={20} height={20} />
          <p>Your Credits</p>
          <Image src="/add.svg" alt="icon" width={25} height={25} />
        </button>
        <button>
          <Image src="/notification.svg" alt="icon" width={20} height={25} />
        </button>
        <button>
          <Image
            src={url!}
            alt="icon"
            width={40}
            height={25}
            className="rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
