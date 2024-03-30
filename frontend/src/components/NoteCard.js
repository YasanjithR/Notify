import React, { useState, useEffect } from "react";
import axios from "axios";

const NoteCard = ({ onClick }) => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8070/note");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8070/note/delete/${noteId}`);
      setNotes(notes.filter((note) => note._id !== noteId));
      console.log("Note deleted successfully");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center h-auto sm:h-48 bg-back-gradient p-4 search-div">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-96 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-green-500 search"
          placeholder="Search..."
        />
      </div>

      <div className="container mx-auto p-5 notes-main">
        <div className="flex flex-wrap -mx-4">
          {filteredNotes.map((note) => (
            <div key={note._id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className="bg-note-gradient rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {note.title}
                </h2>
                <p className="text-gray-600 mb-4">{note.content}</p>
                <div className="flex justify-end">
                  <button
                    className="bg-note-gradient hover:bg-black text-white font-bold py-2 px-4 rounded mr-2 border border-red-500"
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-note-gradient hover:bg-black text-white font-bold py-2 px-4 rounded border border-blue-500"
                    onClick={() => onClick(note._id)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteCard;
