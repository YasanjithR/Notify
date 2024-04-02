import AddButton from "../components/AddButton";
import Logo from "../components/Logo";
import NoteCard from "../components/NoteCard";
import AddNote from "../components/AddNote";
import UpdateNote from "../components/UpdateNote";
import CategoryFilter from "../components/Filter";
import AddCategoryPopup from "../components/AddCategory";
import React, { useState } from "react";
import axios from "axios";
import HomeButton from "../components/HomeButton";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAddPopUp, setShowAddPopUp] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showAddCatPopup, setAddShowCatPopup] = useState(false);

  const [noteId, setNoteId] = useState(null);

  const navigate = useNavigate();

  const handleAddCategory = async (newCategory) => {
    try {
      const response = await axios.post(
        "https://notify-j6ik.onrender.com/category/new",
        newCategory
      );
      setAddShowCatPopup(false);
      window.location.reload();
    } catch (error) {
      console.error("Error category note:", error.message);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    navigate("/FilteredNotes");
  };

  const handleUpdateNote = (noteId) => {
    setShowUpdatePopup(true);
    setNoteId(noteId);
  };
  const handleCreateNote = async (newNoteData) => {
    try {
      const response = await axios.post(
        "https://notify-j6ik.onrender.com/note/new",
        newNoteData
      );
      window.location.reload();
    } catch (error) {
      console.error("Error creating note:", error.message);
    }
  };

  return (
    <>
      <AddButton onClick={() => setShowAddPopUp(true)} />
      <HomeButton />
      <AddNote
        show={showAddPopUp}
        onClose={() => setShowAddPopUp(false)}
        onCreateNote={handleCreateNote}
      />
      {noteId && (
        <UpdateNote
          show={true}
          onClose={() => setNoteId(null)}
          onUpdateNote={handleUpdateNote}
          noteId={noteId}
        />
      )}

      <Logo />
      <CategoryFilter
        onClick={() => setAddShowCatPopup(true)}
        onCategorySelect={handleCategorySelect}
      />

      <NoteCard
        onClick={handleUpdateNote}
        selectedCategory={selectedCategory}
      />

      <AddCategoryPopup
        show={showAddCatPopup}
        onClose={() => setAddShowCatPopup(false)}
        onAddCategory={handleAddCategory}
      />
    </>
  );
};

export default Home;
