"use client";
import { AuthContext } from "@/app/Context/AuthContext";
import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { data } from "../constants";
const Page = () => {
  const [selected,setSelected] = useState(1);
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/6 p-2 ">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col p-4 sticky">
        <Navbar />
        <div className="flex flex-col mt-6 ">
          <div className="flex-1 flex justify-between">
            <div className="flex border-b-2 border-neutral-700 items-center">
              <Image src="/play.svg" alt="iconText" width={20} height={40} />
              <p>My Videos</p>
            </div>
            <button className="bg-[#3C50E0] text-white px-4 py-2 rounded-md flex gap-2">
              <Image
                src="/addWhite.svg"
                alt="iconText"
                width={15}
                height={40}
              />
              <p>New Video</p>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-6">
            <Image
              src="/firstVideo.svg"
              alt="iconText"
              width={50}
              height={40}
            />
            <p className="font-semibold text-xl">Create Your first video</p>
            <p className="w-1/4 flex text-center text-neutral-600">
              Click on the below button to kickstart your video creation journey
              with video first
            </p>
            <button className="bg-[#3C50E0] text-white px-4 py-2 rounded-md flex gap-2 leading-5">
              <Image
                src="/addWhite.svg"
                alt="iconText"
                width={15}
                height={40}
              />
              <p>New Video</p>
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex border-b-2 border-neutral-700 py-2 gap-2">
                <Image
                src='/template.svg'
                alt='template'
                width={20}
                height={20}
                />
                <p>Templates</p>
              </div>
              <div className="flex text-neutral-400 ml-auto gap-2 text-sm items-center ">
                  <button
                  onClick={()=>setSelected(1)}
                  className={`rounded-md px-4 py-2 border-neutral-300  border ${selected===1?" text-black border-neutral-800 ":""}`}>
                      All
                  </button>
                  <button className={`rounded-md px-4 py-2 gap-2 flex border-neutral-300 border ${selected===2?" text-black border-neutral-800 ":""}`}
                  onClick={()=>setSelected(2)}

                  >
                  <Image
                src='/landscape.svg'
                alt='Landscape'
                width={20}
                height={20}
                />
                      <p>Landscape Video (16:9)</p>
                  </button>
                  <button className={`rounded-md px-4 py-2 gap-2 flex border-neutral-300 border ${selected===3?" text-black border-neutral-800 ":""}`}
                  onClick={()=>setSelected(3)}

                  >
                  <Image
                src='/potrait.svg'
                alt='potrait'
                width={10}
                height={10}
                />
                      <p>Potrait Video (9:16)</p>
                  </button>
              </div>
            </div>

              <div className=" grid grid-cols-4 gap-4 mt-4 mb-12 gap-y-4">
                {
                  (data[selected]).map((template)=>{
                    return(
                      <div key={template.src} className="rounded-md flex flex-col ">
                        <Image
                          src={template.src}
                          alt='template'
                          width={350}
                          height={400}
                          />
                          <p className="text-sm font-semibold">{template.text}</p>
                      </div>
                    );
                  })
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
