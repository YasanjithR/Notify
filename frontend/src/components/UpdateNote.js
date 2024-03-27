// UpdateNotePopup.js
import React from 'react';

const UpdateNote = ({ show, onClose, onUpdateNote }) => {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full sm:w-96">
        {/* Form for updating a note */}
        <h2 className="text-xl font-semibold mb-4">Update Note</h2>
        <div className="mb-4">
          <label htmlFor="updateNoteTitle" className="block text-sm font-medium">
            Note Title
          </label>
          <input
            type="text"
            id="updateNoteTitle"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter updated note title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="updateNoteContent" className="block text-sm font-medium">
            Note Content
          </label>
          <textarea
            id="updateNoteContent"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            rows="3"
            placeholder="Enter updated note content"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          >
            {/* Options for category selection */}
            <option value="">Select category...</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onUpdateNote}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
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
