import AddButton from '../components/AddButton'
import Search from '../components/Search'
import NoteCard from '../components/NoteCard'
import AddNote from '../components/AddNote'
import UpdateNote from '../components/UpdateNote'
import CategoryFilter from '../components/Filter'
import AddCategoryPopup from '../components/AddCategory'
import React, { useState } from 'react';

const Home = () => {
  const [showAddPopUp, setShowAddPopUp] = useState(false); // State for Add Note pop-up
  const [showUpdatePopup, setShowUpdatePopup] = useState(false); // State for Update Note pop-up
  const [showAddCatPopup, setAddShowCatPopup] = useState(false);

  const categories = [
    { name: 'Work', color: 'bg-blue-500' },
    { name: 'Personal', color: 'bg-green-500' },
    { name: 'Other', color: 'bg-yellow-500' }
  ];

  const handleAddCategory = (category) => {
    // Logic to add the new category
    console.log('New category:', category);
  };

  const handleFilter = (categoryName) => {
    // Implement filtering logic here
    console.log(`Filter notes by category: ${categoryName}`);
  };

  const handleUpdateNote = () => {
    // Logic to update the note
    // You can send the updated note data to your backend or perform any other actions
    console.log("Updating note...");
    setShowUpdatePopup(false); // Close the update pop-up after updating the note
  };

  const handleCreateNote = () => {
    // Logic to create a new note
    // You can send the note data to your backend or perform any other actions
    console.log("Creating note...");
    setShowAddPopUp(false); // Close the pop-up after creating the note
  };




  return ( 
    <>


      <AddButton onClick={() => setShowAddPopUp(true)} />
      <AddNote
        show={showAddPopUp}
        onClose={() => setShowAddPopUp(false)}
      />
      <UpdateNote
        show={showUpdatePopup}
        onClose={() => setShowUpdatePopup(false)}
      />
      <Search />
      <CategoryFilter categories={categories} 
      onClick={() => setAddShowCatPopup(true)}
     />
     
      
      <NoteCard  onClick={() => setShowUpdatePopup(true)}/>

      <AddCategoryPopup
        show={showAddCatPopup}
      onClose={() => setAddShowCatPopup(false)}
        onAddCategory={handleAddCategory}
      />
    </>
  );
}

export default Home;
