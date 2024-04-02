// NoteFormPopup.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddNote = ({ show, onClose, onCreateNote }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState(""); // Define title state
  const [content, setContent] = useState(""); // Define content state

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://notify-j6ik.onrender.com:8070/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleCreateNote = () => {
    try {
      if (!title.trim() || !content.trim() || !selectedCategory) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all fields!",
        });
        return;
      }

      onCreateNote({
        title,
        content,
        category: selectedCategory,
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Note created succesfully",
        confirmButtonText: "OK",
      });

      setTitle("");
      setContent("");
      setSelectedCategory("");
      onClose();
    } catch (error) {
      console.error("Error Creating Note:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to create note. Please try again later.",
      });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-pop-gradient rounded-lg p-6 w-full sm:w-96">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Create New Note
        </h2>
        <div className="mb-4">
          <label
            htmlFor="noteTitle"
            className="block text-sm font-medium text-white"
          >
            Note Title
          </label>
          <input
            type="text"
            id="noteTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter note title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="noteContent"
            className="block text-sm font-medium text-white"
          >
            Note Content
          </label>
          <textarea
            id="noteContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            rows="3"
            placeholder="Enter note content"
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
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
            onClick={handleCreateNote}
            className="bg-note-gradient text-white px-4 py-2 rounded mr-2 hover:bg-black border border-blue-500"
          >
            Create Note
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

export default AddNote;
