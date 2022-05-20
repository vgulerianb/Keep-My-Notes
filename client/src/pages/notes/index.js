import React, { useState } from "react";
import { EditNoteModal, NoNotes, NotesCard } from "../../components";

export default function NotesSection() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div
      onClick={() => setEditMode(false)}
      className="prose flex flex-col items-center min-w-full h-screen px-[40px] my-[40px] gap-[40px]"
    >
      <span className="font-semibold text-3xl">Keep my notes</span>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="shadow-vg1 gap-[12px] bg-white w-full flex flex-col max-w-[600px] p-[20px] rounded-md"
      >
        {editMode ? <input placeholder="Title" /> : ""}
        <textarea
          onClick={() => setEditMode(true)}
          className="border-0 resize-none max-h-[900px]"
          placeholder="Take a note..."
        />
      </div>
      {/* Notes card holder */}
      <div className="grid gap-[20px] grid-cols-vg1 w-full">
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
      <EditNoteModal/>
      {/* <NoNotes /> */}
    </div>
  );
}
