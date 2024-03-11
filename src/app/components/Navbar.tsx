import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex ">
      <div className="flex-1 text-2xl font-semibold text-neutral-600">
        Projects
      </div>
      <div className="flex justify-center items-center ">
        <button className="flex text-orange-600 font-semibold bg-orange-50 gap-2 px-4 py-2">
          <Image src="/credit.svg" alt="icon" width={20} height={20} />
          <p>Your Credits</p>
          <Image src="/add.svg" alt="icon" width={25} height={25} />
        </button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Navbar;
