import AddButton from '../components/AddButton'
import Search from '../components/Search'
import NoteCard from '../components/NoteCard'
import AddNote from '../components/AddNote'
import UpdateNote from '../components/UpdateNote'
import React, { useState } from 'react';

const Home = () => {
  const [showAddPopUp, setShowAddPopUp] = useState(false); // State for Add Note pop-up
  const [showUpdatePopup, setShowUpdatePopup] = useState(false); // State for Update Note pop-up

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
      <NoteCard  onClick={() => setShowUpdatePopup(true)}/>
    </>
  );
}

export default Home;
