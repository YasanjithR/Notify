import React, { useState } from "react";

const AddCategoryPopup = ({ show, onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");
  const [color, setColor] = useState("#000000");

  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      alert("Please enter a category name.");
      return;
    }
    //check if hex color
    const hexColorRegex = /^#[0-9A-F]{6}$/i;
    if (!hexColorRegex.test(color)) {
      alert("Please enter a valid hexadecimal color code.");
      return;
    }
    const newCategory = {
      catName: categoryName,
      colorID: color,
    };

    onAddCategory(newCategory);

    setCategoryName("");
    setColor("#000000");
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-pop-gradient rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4 text-white">
          Add New Category
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium text-white"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="color"
              className="block text-sm font-medium text-white"
            >
              Color
            </label>
            <input
              type="color"
              id="color"
              className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-note-gradient text-white px-4 py-2 rounded mr-2 hover:bg-black border border-blue-500"
              onClick={handleAddCategory}
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
