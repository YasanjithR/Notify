import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const navigate = useNavigate;

const UpdateNote = ({ show, onClose, onUpdateNote, noteId }) => {
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchNoteDetails = async () => {
      try {
        const [noteResponse, categoriesResponse] = await Promise.all([
          axios.get(`https://notify-j6ik.onrender.com/note/${noteId}`),
          axios.get(`https://notify-j6ik.onrender.com/category`),
        ]);
        setNoteDetails(noteResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching note details:", error);
      }
    };

    fetchNoteDetails();
  }, [noteId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteDetails({
      ...noteDetails,
      [name]: value,
    });
  };

  const handleUpdateNote = async () => {
    if (!noteDetails.title || !noteDetails.content) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    try {
      await axios.patch(
        `https://notify-j6ik.onrender.com/note/update/${noteId}`,
        noteDetails
      );
      onUpdateNote();
      window.location.reload();
      onClose();

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Note updated successfully.",
      });
    } catch (error) {
      console.error("Error updating note:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update note. Please try again later.",
      });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-pop-gradient rounded-lg p-6 w-full sm:w-96">
        <h2 className="text-xl font-semibold mb-4 text-white">Update Note</h2>
        <div className="mb-4">
          <label
            htmlFor="updateNoteTitle"
            className="block text-sm font-medium text-white"
          >
            Note Title
          </label>
          <input
            type="text"
            id="updateNoteTitle"
            name="title"
            value={noteDetails.title}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter updated note title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="updateNoteContent"
            className="block text-sm font-medium text-white"
          >
            Note Content
          </label>
          <textarea
            id="updateNoteContent"
            name="content"
            value={noteDetails.content}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            rows="3"
            placeholder="Enter updated note content"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-white"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={noteDetails.category}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select category...</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.catName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleUpdateNote}
            className="bg-note-gradient text-white px-4 py-2 rounded mr-2 hover:bg-black border border-blue-500"
          >
            Update Note
          </button>

          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNote;
