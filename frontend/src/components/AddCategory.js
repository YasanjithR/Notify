// AddCategoryPopup.js
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const AddCategoryPopup = ({ show, onClose, onAddCategory }) => {
 
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        show ? '' : 'hidden'
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
        <form>
        <div className="mb-4">
          <label htmlFor="noteTitle" className="block text-sm font-medium">
            Category Name
          </label>
          <input         
            type="text"
            id="catName"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter Category Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="noteTitle" className="block text-sm font-medium">
           Color
          </label>
          <input
            type="color"
            id="colorID"
           
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            
          />
        </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
              onClick={onAddCategory}
            >
              Add
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryPopup;
