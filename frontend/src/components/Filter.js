import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryFilter = ({ handleFilter, onClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8070/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex space-x-2 overflow-x-auto py-2 px-2 md:px-0 m-5">
      {categories.map((category, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 rounded-md px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={() => handleFilter(category.catName)}
        >
          <div
            className={`w-6 h-6 rounded-full`}
            style={{ backgroundColor: category.colorID }}
            title={category.catName}
          ></div>
          <span>{category.catName}</span>
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

export default CategoryFilter;
