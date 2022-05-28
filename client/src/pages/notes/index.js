import React, { useState, useEffect } from "react";
import { EditNoteModal, NoNotes, NotesCard } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../../constants";

export default function NotesSection() {
  const [editMode, setEditMode] = useState(false);
  const [accessToken, setAccessToken] = useState("")
  const [editModal, setEditModal] = useState({
    title: "",
    description: "",
    id: ""
  })
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("accessToken")
    if(!token){
      navigate("/")
    }
    setAccessToken(token)
  },[])

  useEffect(()=>{
    if(accessToken){
      getNotes()
    }
  },[accessToken])

  const getNotes = () =>{
    axios.get(`${BASE_API_URL}notes`,{
      headers: {
        "Authorization": accessToken
      }
    }).then((res)=>{
      console.log(res)
    })
  }

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
      {editModal.id!==""?<EditNoteModal/>:""}
      {/* <NoNotes /> */}
    </div>
  );
}
