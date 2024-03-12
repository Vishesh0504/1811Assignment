"use client";
import toast from "react-hot-toast";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export default function Home() {
  const supabase = createClientComponentClient();
  console.log(location.origin)
  const handleGoogleAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `https://${process.env.VERCEL_URL}/auth/callback`,
      },
    });
    if (error) {
      console.log(error);
      toast.error(`${error}`);
    } else {
    }
  };
  return (
    <main className="flex justify-center py-16 ">
      <div className="flex flex-col items-center">
        <div className="flex ">
          <Image src="/icon.svg" alt="icon" width={50} height={50} />
          <Image src="/iconText.svg" alt="iconText" width={120} height={40} />
        </div>
        <div className="flex flex-col items-center mt-14">
          <p className="font-bold text-3xl">Log in</p>
          <p className=" text-base text-neutral-500">
            Let&apos;s get started by creating your account
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <button
            onClick={() => handleGoogleAuth()}
            className="flex-1 border border-neutral-300 rounded-md flex text-base gap-6 px-20 py-3 box-content mt-12"
          >
            <Image src="/google.png" alt="google logo" width={21} height={21} />
            Login with Google
          </button>
          <div className="flex-1 flex items-center gap-2 text-neutral-400 text-sm">
            <hr className="w-full border-neutral-300"></hr>
            OR
            <hr className="w-full border-neutral-300"></hr>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className=" font-semibold">
                Enter name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="lets.join@audionotes.com"
                className="w-full outline-none border border-neutral-300 rounded-md py-3 px-4 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className=" font-semibold">
                Set password <span className="text-red-500">*</span>
              </p>
              <label className="border border-neutral-300 rounded-md py-3 px-4 text-sm flex gap-2 justify-center items-center">
                <Image src="/lock.svg" alt="lock" width={20} height={20} />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none "
                />
              </label>
            </div>
            <div className="flex-1  flex justify-between text-blue-600 font-semibold ">
              <label className="flex gap-1">
                <input type="checkbox" className="border border-neutral-100" />
                Remember Me
              </label>
              <button>Forgot Password?</button>
            </div>
            <button className="flex-1 rounded-md bg-blue-600 px-20 py-3 text-white font-semibold">
              Login
            </button>
            <div className="flex-1 flex gap-2 text-sm justify-center items-center text-neutral-600">
              Don&apos;t have an account?{" "}
              <button className="text-blue-600">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
