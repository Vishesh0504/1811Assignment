import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
const Sidebar = ({open,setOpen}:{open:boolean,setOpen:Dispatch<SetStateAction<boolean>>}) => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex flex-col rounded-md border border-neutral-200 py-1.5 px-1 md:py-3 md:px-2 xl:py-6 xl:px-4 h-full z-50">
      {open &&
      (<div className="flex ml-auto">
        <button className="p-2">
          <Image src="/close.png" alt="close" width={15} height={15} onClick={()=>setOpen(false)} />
        </button>
      </div>)}
      <div className="flex items-center">
        <Image src="/icon.svg" alt="icon" width={50} height={50} className="max-md:size-8"/>
        <Image src="/iconText.svg" alt="iconText" width={120} height={40} className="max-md:size-auto"/>
      </div>
      <div className=" flex flex-col text-neutral-600 mt-2 md:mt-6 gap-2 text-sm md:text-base ">
        <button
          onClick={() => setSelected(1)}
          className={`rounded-md  ${selected === 1 ? " border border-neutral-200 text-black font-semibold" : ""} flex gap-2 px-1 py-0.5 md:px-2 md:py-1 xl:px-4 xl:py-2 `}
        >
          <Image src="/project.svg" alt="myproject" width={20} height={20} />
          <p className=" whitespace-nowrap">My projects</p>
        </button>
        <button
          onClick={() => setSelected(2)}
          className={`rounded-md  ${selected === 2 ? "border border-neutral-200 text-black font-semibold" : ""} flex gap-2 px-1 py-0.5 md:px-2 md:py-1 xl:px-4 xl:py-2`}
        >
          <Image src="/avatars.svg" alt="myproject" width={20} height={20} />
          <p className="whitespace-nowrap">AI Avatars</p>
        </button>
        <button
          onClick={() => setSelected(3)}
          className={`rounded-md  ${selected === 3 ? "border border-neutral-200 text-black font-semibold" : ""} flex gap-2 px-1 py-0.5 md:px-2 md:py-1 xl:px-4 xl:py-2`}
        >
          <Image src="/voices.svg" alt="myproject" width={20} height={20} />
          <p>Voices</p>
        </button>
      </div>
      <div className="flex flex-col mt-auto gap-3">
        <button className="flex xl:px-4 xl:py-2 py-1 px-2 bg-[FF4D00] rounded-sm justify-start bg-orange-50 ">
          <Image
            src="/upgradePlan.svg"
            alt="myproject"
            width={20}
            height={20}
          />
          <p className="flex-1 whitespace-nowrap max-md:text-sm">Upgrade Plan</p>
          <Image
            src="/arrow-right.svg"
            alt="myproject"
            width={20}
            height={20}
          />
        </button>
        <button
          onClick={() => setSelected(3)}
          className={`rounded-md flex gap-2 px-4 py-2 text-neutral-600`}
        >
          <Image src="/pricing.svg" alt="myproject" width={20} height={20} />
          <p className="whitespace-nowrap max-md:text-sm">Pricing</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
