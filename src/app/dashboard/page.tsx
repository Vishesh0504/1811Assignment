"use client";
import { AuthContext } from "@/app/Context/AuthContext";
import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { data } from "../constants";
const Page = () => {
  const [selected, setSelected] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <div className="flex w-screen h-screen">
      <div className="xl:w-1/6 p-2 ">
        {!sidebarOpen&&<button className="xl:hidden max-xl:m-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Image
            src="/menu.png"
            alt="menu"
            width={20}
            height={20}
          />
        </button>}

        <div className={` h-full  ${sidebarOpen ?'absolute z-50 bg-white':'max-xl:hidden'}`}>
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </div>
      </div>

      <div className="w-full flex flex-col p-2 md:p-4 sticky">
        <Navbar />
        <div className="flex flex-col mt-6 ">
          <div className="flex-1 flex justify-between">
            <div className="flex border-b-2 border-neutral-700 items-center max-md:text-sm">
              <Image src="/play.svg" alt="iconText" width={20} height={40} className="size-4"/>
              <p>My Videos</p>
            </div>
            <button className="bg-[#3C50E0] text-white px-2 py-1 md:px-4 md:py-2 rounded-md flex gap-2 items-center max-md:text-sm">
              <Image
                src="/addWhite.svg"
                alt="iconText"
                width={15}
                height={40}
                className="size-3"
              />
              <p>New Video</p>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center md:gap-4 gap-2 md:mt-6 mt-3">
            <Image
              src="/firstVideo.svg"
              alt="iconText"
              width={50}
              height={40}
              className="max-md:size-10"
            />
            <p className="font-semibold md:text-xl sm:text-base">Create Your first video</p>
            <p className="max-w-[25%] min-w-[250px] flex text-center text-neutral-600 text-xs md:text-base">
              Click on the below button to kickstart your video creation journey
              with video first
            </p>
            <button className="bg-[#3C50E0] text-white px-2 py-1 md:px-4 md:py-2 rounded-md flex gap-2 text-sm items-center md:text-base">
              <Image
                src="/addWhite.svg"
                alt="iconText"
                width={15}
                height={40}
                className="size-3"
              />
              <p>New Video</p>
            </button>
          </div>
          <div className="flex flex-col mt-2 md:mt-6">
            <div className="flex justify-between">
              <div className="flex border-b-2 border-neutral-700 py-2 gap-1 md:gap-2 max-md:text-sm items-center">
                <Image
                  src="/template.svg"
                  alt="template"
                  width={20}
                  height={20}
                  className="max-md:size-4"
                />
                <p>Templates</p>
              </div>
              <div className="flex text-neutral-400 ml-auto gap-2 text-sm items-center ">
                <button
                  onClick={() => setSelected(1)}
                  className={`rounded-md px-2 md:px-4 md:py-2 border-neutral-300  border ${selected === 1 ? " text-black border-neutral-800 " : ""}`}
                >
                  All
                </button>
                <button
                  className={`rounded-md px-2 py-1 md:px-4 md:py-2 gap-2 flex border-neutral-300 border ${selected === 2 ? " text-black border-neutral-800 " : ""}`}
                  onClick={() => setSelected(2)}
                >
                  <Image
                    src="/landscape.svg"
                    alt="Landscape"
                    width={20}
                    height={20}
                  />
                  <p className="max-md:hidden">Landscape Video (16:9)</p>
                </button>
                <button
                  className={`rounded-md px-2 py-1 md:px-4 md:py-2 gap-2 flex border-neutral-300 border ${selected === 3 ? " text-black border-neutral-800 " : ""}`}
                  onClick={() => setSelected(3)}
                >
                  <Image
                    src="/potrait.svg"
                    alt="potrait"
                    width={10}
                    height={10}
                  />
                  <p className="max-md:hidden">Potrait Video (9:16)</p>
                </button>
              </div>
            </div>

            <div className=" grid md:grid-cols-4 grid-cols-2 gap-4 mt-4 mb-12 gap-y-4">
              {data[selected].map((template) => {
                return (
                  <div key={template.src} className="rounded-md flex flex-col ">
                    <Image
                      src={template.src}
                      alt="template"
                      width={350}
                      height={400}
                    />
                    <p className="text-xs md:text-sm md:font-semibold text-pretty text-center mt-1">{template.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
