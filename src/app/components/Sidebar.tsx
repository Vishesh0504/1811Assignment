import React, { useState } from "react";
import Image from "next/image";
const Sidebar = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex flex-col rounded-md border border-neutral-200 py-6 px-4 h-full">
      <div className="flex ">
        <Image src="/icon.svg" alt="icon" width={50} height={50} />
        <Image src="/iconText.svg" alt="iconText" width={120} height={40} />
      </div>
      <div className=" flex flex-col text-neutral-600 mt-6 gap-2">
        <button
          onClick={() => setSelected(1)}
          className={`rounded-md  ${selected === 1 ? " border border-neutral-200 text-black font-semibold" : ""} flex gap-2 px-4 py-2`}
        >
          <Image src="/project.svg" alt="myproject" width={20} height={20} />
          <p>My projects</p>
        </button>
        <button
          onClick={() => setSelected(2)}
          className={`rounded-md  ${selected === 2 ? "border border-neutral-200 text-black font-semibold" : ""} flex gap-2 px-4 py-2`}
        >
          <Image src="/avatars.svg" alt="myproject" width={20} height={20} />
          <p>AI Avatars</p>
        </button>
        <button
          onClick={() => setSelected(3)}
          className={`rounded-md  ${selected === 3 ? "border border-neutral-200 text-black font-semibold" : ""} flex gap-2 px-4 py-2`}
        >
          <Image src="/voices.svg" alt="myproject" width={20} height={20} />
          <p>Voices</p>
        </button>
      </div>
      <div className="flex flex-col mt-auto gap-3">
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
        <button
          onClick={() => setSelected(3)}
          className={`rounded-md flex gap-2 px-4 py-2 text-neutral-600`}
        >
          <Image src="/pricing.svg" alt="myproject" width={20} height={20} />
          <p>Pricing</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
