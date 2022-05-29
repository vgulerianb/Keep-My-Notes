import React, { useState, useEffect } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import axios from "axios";
import { BASE_API_URL } from "../constants";

export default function EditNoteModal({
  id,
  title,
  description,
  onClose,
  setNotes,
}) {
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteDesc, setNoteDesc] = useState(description);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  const editNote = () => {
    axios
      .put(
        `${BASE_API_URL}notes`,
        {
          id: id,
          title: noteTitle,
          description: noteDesc,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
      .then((res) => {
        setNotes(res?.data?.notes);
        onClose();
      });
  };

  const deleteNote = () => {
    axios
      .delete(`${BASE_API_URL}notes`, {
        data: { id: id },
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        setNotes(res?.data?.notes);
        onClose();
      });
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      PaperProps={{
        className: "shadow-none bg-transparent w-full",
      }}
    >
      <div className="w-full flex gap-[6px] flex-col justify-between max-h-[800px] min-h-[300px] max-w-[600px] pb-[6px] p-[18px]">
        <div className="flex gap-[6px] flex-col">
          <input
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
            placeholder="Title"
            className="font-semibold text-[18px]"
          />
          <textarea
            onChange={(e) => setNoteDesc(e.target.value)}
            value={noteDesc}
            className="border-0 resize-none h-full max-h-[900px] text-[16px]"
            placeholder="Take a note..."
          />
        </div>
        <div className="flex justify-between">
          <IconButton onClick={deleteNote}>
            <Delete />{" "}
          </IconButton>
          <Button
            onClick={editNote}
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
