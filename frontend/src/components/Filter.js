import React from "react"

const CategoryFilter = ({ categories, handleFilter, onClick }) => {
  return (
    <div className="flex space-x-2 overflow-x-auto py-2 px-2 md:px-0 m-5">
      {categories.map((category, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 rounded-md px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={() => handleFilter(category.name)}
        >
          <div
            className={`w-6 h-6 rounded-full ${category.color}`}
            title={category.name}
          ></div>
          <span>{category.name}</span>
        </button>
      ))}

      <button
        className="flex items-center rounded-full px-3 py-1 bg-note-gradient hover:bg-black focus:outline-none"
        onClick={onClick}
      >
        <span className="text-white text-xl">+</span>
      </button>
    </div>
  );
};

export default CategoryFilter
