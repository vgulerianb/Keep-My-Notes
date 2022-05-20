import React, { useState } from "react";

export default function NotesSection() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div onClick={()=>setEditMode(false)} className="prose flex flex-col items-center min-w-full h-screen container my-[40px] gap-[40px]">
      <span className="font-semibold text-3xl">Keep my notes</span>
      {/* No Notes Section */}
      <div onClick={(e)=>{
          e.stopPropagation()
      }} className="shadow-vg1 gap-[12px] bg-white w-full flex flex-col max-w-[600px] p-[20px] rounded-md">
        {editMode?<input placeholder="Title"/>:""}
        <textarea onClick={()=>setEditMode(true)} className="border-0 resize-none max-h-[900px]" placeholder="Take a note..."/>
      </div>
      <div className="flex items-center flex-col gap-[20px] h-[60%] justify-center">
        <div
          className="w-[120px] h-[120px] bg-no-repeat bg-contain opacity-[0.1]"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNOSAyMWMwIC41NS40NSAxIDEgMWg0Yy41NSAwIDEtLjQ1IDEtMXYtMUg5djF6bTMtMTlDOC4xNCAyIDUgNS4xNCA1IDljMCAyLjM4IDEuMTkgNC40NyAzIDUuNzRWMTdjMCAuNTUuNDUgMSAxIDFoNmMuNTUgMCAxLS40NSAxLTF2LTIuMjZjMS44MS0xLjI3IDMtMy4zNiAzLTUuNzQgMC0zLjg2LTMuMTQtNy03LTd6bTIuODUgMTEuMWwtLjg1LjZWMTZoLTR2LTIuM2wtLjg1LS42QTQuOTk3IDQuOTk3IDAgMCAxIDcgOWMwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1YzAgMS42My0uOCAzLjE2LTIuMTUgNC4xeiIvPgo8L3N2Zz4K")`,
          }}
        ></div>
        <span className="leading-[1.75rem] font-normal  text-[#80868b] text-[1.375rem] cursor-default">
          Notes you add appear here
        </span>
      </div>
    </div>
  );
}
