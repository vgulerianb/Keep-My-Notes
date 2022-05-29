import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditNoteModal from "./EditNoteModal";

export default function NotesCard({ id, title, description }) {
  const [showEdit, setShowEdit] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setShowEdit(true)}
        onMouseLeave={() => setShowEdit(false)}
        className="relative cursor-pointer flex flex-col gap-[6px] break-words p-[18px] bg-white border-gray-300 hover:shadow-vg1 rounded-md border border-solid"
      >
        {showEdit ? (
          <EditIcon
            onClick={() => setEditModal(true)}
            className="absolute top-[2px] right-[2px]"
          />
        ) : (
          ""
        )}
        <span className="font-semibold text-[18px]">{title}</span>
        <span className="text-[16px]">{description}</span>
      </div>
      {editModal ? (
        <EditNoteModal onClose={() => setEditModal(false)} id={id} title={title} description={description} />
      ) : (
        ""
      )}
    </>
  );
}
