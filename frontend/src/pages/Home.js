import AddButton from "../components/AddButton";
import Search from "../components/Search";
import NoteCard from "../components/NoteCard";
import AddNote from "../components/AddNote";
import UpdateNote from "../components/UpdateNote";
import CategoryFilter from "../components/Filter";
import AddCategoryPopup from "../components/AddCategory";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const [showAddPopUp, setShowAddPopUp] = useState(false); // State for Add Note pop-up
  const [showUpdatePopup, setShowUpdatePopup] = useState(false); // State for Update Note pop-up
  const [showAddCatPopup, setAddShowCatPopup] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);
  const [noteId, setNoteId] = useState(null);
  const navigate = useNavigate();

  const handleAddCategory = async (newCategory) => {
    try {
      const response = await axios.post(
        "http://localhost:8070/category/new",
        newCategory
      );
      alert("New category created");
      setRedirectHome(true);
      setAddShowCatPopup(false);
      setRedirectHome(true);
    } catch (error) {
      console.error("Error category note:", error.message);
    }
  };

  const handleFilter = (categoryName) => {

    console.log(`Filter notes by category: ${categoryName}`);
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
      alert("New note created");
    } catch (error) {
      console.error("Error creating note:", error.message);
    }
  };

  useEffect(() => {
    if (redirectHome) {
      navigate("/"); 
    }
  }, [redirectHome, navigate]);

  return (
    <>
      <AddButton onClick={() => setShowAddPopUp(true)} />
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

      <Search />
      <CategoryFilter onClick={() => setAddShowCatPopup(true)} />

      <NoteCard onClick={handleUpdateNote} />

      <AddCategoryPopup
        show={showAddCatPopup}
        onClose={() => setAddShowCatPopup(false)}
        onAddCategory={handleAddCategory}
      />
    </>
  );
};

export default Home;
