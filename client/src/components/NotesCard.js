import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

export default function NotesCard() {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
      className="relative flex flex-col gap-[6px] break-words p-[18px] bg-white border-gray-300 hover:shadow-vg1 rounded-md border border-solid"
    >
      {showEdit ? <EditIcon className="absolute top-[2px] right-[2px]" /> : ""}
      <span className="font-semibold text-[18px]">Heading</span>
      <span className="text-[16px]">content</span>
    </div>
  );
}
