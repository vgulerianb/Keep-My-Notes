import React, { useState } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function EditNoteModal({ id, title, description, onClose }) {
  const [noteTitle, setNoteTitle] = useState(title)
  const [noteDesc, setNoteDesc] = useState(description)

  return (
    <Dialog
      open={true}
      PaperProps={{
        className: "shadow-none bg-transparent w-full",
      }}
    >
      <div className="w-full flex gap-[6px] flex-col justify-between max-h-[800px] min-h-[300px] max-w-[600px] pb-[6px] p-[18px]">
        <div className="flex gap-[6px] flex-col">
          <input value={noteTitle} placeholder="Title" className="font-semibold text-[18px]" />
          <textarea
            value={noteDesc}
            className="border-0 resize-none h-full max-h-[900px] text-[16px]"
            placeholder="Take a note..."
          />
        </div>
        <div className="flex justify-between">
          <IconButton>
            <Delete />{" "}
          </IconButton>
          <Button
            variant="contained"
            className="bg-blue-600 text-white h-[30px] items-center"
          >
            Save
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
