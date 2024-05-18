"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteCookie } from "cookies-next";

import { Slider } from "@/components/ui/slider";

import { AuthContext } from "@/app/Context/AuthContext";
import { supabase } from "../utils/supabase";
import { useRouter} from "next/navigation";


const Navbar = () => {
  const [value, setValue] = useState(4);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const handleLogOut = async()=>{
    deleteCookie('user');
    deleteCookie('sb-joxpznrwbokfnxjlidpb-auth-token')
    setTimeout(()=>{router.push("/")},500);
  }

  let url, email, name;
  if (user) {
    url = user.picture;
    email = user.email;
    name = user.name;
  }
  return (
    <div className="flex items-center">
      <div className="flex-1  md:text-2xl text-lg font-semibold text-neutral-800">
        Projects
      </div>
      <div className="flex justify-center items-center lg:gap-8 md:gap-6 gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div className="flex text-orange-600 font-semibold bg-orange-50 gap-2  px-2 py-1 md:px-4 md:py-2 border border-orange-400 rounded-md text-sm items-center ">
              <Image src="/credit.svg" alt="icon" width={15} height={15} />
              <p>Your Credits:4</p>
              <Image src="/add.svg" alt="icon" width={15} height={15} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" lg:w-[26em] ">
            <DropdownMenuLabel className="flex flex-col gap-1 justify-center items-center mt-2">
              <Image src="/buy.svg" alt="icon" width={20} height={20} />
              <p className="text-base">Buy more credits</p>
              <p className="text-sm text-neutral-400 font-normal">
                1 video requires around 2 credits
              </p>
            </DropdownMenuLabel>
            <DropdownMenuItem
              className="flex-col flex "
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <div className="flex gap-2 w-full">
                <Slider
                  defaultValue={[value]}
                  max={100}
                  step={1}
                  onValueChange={(i) => setValue(i[0])}
                  onClick={(e) => e.stopPropagation()}
                  className=" outline-none w-3/4"
                />
                <p>{value} credits</p>
              </div>
              <div>
                <p className="text-sm text-neutral-400">1 credit ≈ $2</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-4">
              <button className="px-4 py-2 text-neutral-700 border border-neutral-300 rounded-md flex-1 flex justify-center">
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#3C50E0] text-white rounded-md flex-1 flex justify-center">
                Buy
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div>
              <Image
                src="/notification.svg"
                alt="icon"
                width={20}
                height={25}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel className="flex justify-between text-sm">
              <p className="font-semibold">Notification</p>
              <p className="text-neutral-400 cursor-pointer">Clear All</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="w-full border border-neutral-200 " />
            <DropdownMenuItem className="flex flex-col items-start text-sm text-neutral-600">
              <p className=" text-start">
                Edit your information in a swipe Sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim.
              </p>
              <p className="text-xs text-neutral-400 mt-1">12 May, 2025</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start text-sm text-neutral-600">
              <p className=" text-start">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
              <p className="text-xs text-neutral-400 mt-1">24 Feb, 2025</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start text-sm text-neutral-600">
              <p className=" text-start">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered
              </p>
              <p className="text-xs text-neutral-400 mt-1">04 Jan, 2025</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div>
              <Image
                src={url!}
                alt="icon"
                width={40}
                height={25}
                className="rounded-full cursor-pointer max-md:size-6"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit" onClick={(e)=>{e.preventDefault();
          e.stopPropagation()}}>
            <DropdownMenuLabel className="flex gap-2 ">
              <Image
                src={url!}
                alt="icon"
                width={40}
                height={25}
                className="rounded-full cursor-pointer"
              />
              <div>
                <div className="flex justify-between">
                  <p>{name}</p>
                  <p className="rounded-sm text-xs px-1 py-0.5 text-neutral-400 bg-neutral-200 h-fit">
                    Free
                  </p>
                </div>
                <p className="font-normal text-neutral-600">{email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex gap-4 font-sm"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Image
                src="/account.svg"
                alt="icon"
                width={20}
                height={20}
                className="rounded-full cursor-pointer"
              />
              <Popover >
                <PopoverTrigger onClick={(e)=>{e.stopPropagation()}} >
                  <p>Account</p>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col w-96" onClick={(e)=>{e.stopPropagation()}}>
                  <div className="flex flex-col">
                    <p>Account</p>
                    <p className="text-xs text-neutral-400">
                      Choose the avatar that best describes your use case
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex flex-col text-sm">
                      <p className="text-sm text-neutral-500">Display Name</p>
                      <p>{name}</p>
                    </div>
                    <div className="flex flex-col text-sm">
                      <p className="text-sm text-neutral-500">Email Address</p>
                      <p>{email}</p>
                    </div>
                    <div className="flex flex-col text-sm justify-center">
                      <p className="text-sm text-neutral-500">Current Plan</p>
                      <div className="flex justify-between items-center">
                        <p>Free</p>
                        <button className="flex px-4 py-2 bg-[FF4D00] rounded-sm justify-start bg-orange-50">
                          <Image
                            src="/upgradePlan.svg"
                            alt="myproject"
                            width={20}
                            height={20}
                          />
                          <p className="flex-1">Upgrade Plan</p>
                          <Image
                            src="/arrow-right.svg"
                            alt="myproject"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                      <div className="w-full rounded-md bg-slate-200 flex gap-2 text-slate-700 px-4 py-2 mt-2">
                      <Image
                            src="/info.svg"
                            alt="myproject"
                            width={20}
                            height={20}
                          />
                        <p> Your Credits = 24</p>
                      </div>
                      <div className="w-full bg-orange-500 rounded-md text-white text-sm flex justify-between px-4 py-2 mt-4 items-center">
                        <p>
                          Want to join the affliate program?
                        </p>
                        <button className="rounded-md bg-transparent border-white border px-3 py-1">
                            Join now
                        </button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-4 font-sm">
              <Image
                src="/support.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <p>Support</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-4 text-sm cursor-pointer" onClick={()=>handleLogOut()}>
              <Image
                src="/log-out.svg"
                alt="icon"
                width={20}
                height={20}
                className="rounded-full cursor-pointer"
              />
              <p>Log-out</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 justify-center text-neutral-400 text-xs">
              <p className="underline">Privacy Policy</p>
              <p className="underline">Terms & condition</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
