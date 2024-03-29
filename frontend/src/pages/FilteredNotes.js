import AddButton from "../components/AddButton";
import Logo from "../components/Logo";
import AddNote from "../components/AddNote";
import UpdateNote from "../components/UpdateNote";
import CategoryFilter from "../components/Filter";
import AddCategoryPopup from "../components/AddCategory";
import FilteredNoteCard from "../components/FilteredNoteCard";
import HomeButton from "../components/HomeButton";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FilteredNotes = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAddPopUp, setShowAddPopUp] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showAddCatPopup, setAddShowCatPopup] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);
  const [noteId, setNoteId] = useState(null);

  const navigate = useNavigate();

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAddCategory = async (newCategory) => {
    try {
      const response = await axios.post(
        "http://localhost:8070/category/new",
        newCategory
      );

   
      setAddShowCatPopup(false);
      navigate("/home");
    } catch (error) {
      console.error("Error category note:", error.message);
    }
  };

  const handleUpdateNote = (noteId) => {
    setShowUpdatePopup(true);
    setNoteId(noteId);
  };

  const handleCreateNote = async (newNoteData) => {
    try {
      const response = await axios.post(
        "http://localhost:8070/note/new",
        newNoteData
      );
      navigate("/home");
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

      <FilteredNoteCard
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

export default FilteredNotes;
