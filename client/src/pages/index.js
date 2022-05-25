import React from "react";
import GoogleLogo from "../assets/google.svg"

export default function LoginScreen() {
  const redirect_url = "https://keep-my-notes.vercel.app"
  const clientId = "783341713076-di9j1e0h4gk794mhhhb0onip7rni6b0g.apps.googleusercontent.com"

  return (
    <div className="prose lg:prose-xl flex justify-center mt-[100px] h-screen min-w-full">
      <div className="flex flex-col items-center gap-[32px]">
        <span className="font-semibold text-3xl">Keep my notes</span>
        <div
          onClick={()=>{
              window.location.href = `https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=code&access_type=offline&redirect_uri=${redirect_url}&client_id=${clientId}`
          }}
          className="p-[4px] text-lg cursor-pointer rounded-md bg-no-repeat flex items-center gap-[4px] border border-solid border-slate-400"
        >
            <img src={GoogleLogo} alt={"googlelogo"} className={"h-[18px] m-[0px!important]"} height={18} width={18}/>
          Login Using Google
        </div>
      </div>
    </div>
  );
}
