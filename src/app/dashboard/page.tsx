"use client";
import { AuthContext } from "@/Context/AuthContext";
import React, { useContext } from "react";
import { getCookie } from "cookies-next";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
const Page = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/6 p-2 ">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col p-8 ">
        <Navbar />
      </div>
    </div>
  );
};

export default Page;
