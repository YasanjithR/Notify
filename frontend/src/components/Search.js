import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        // Perform search using axios
        const response = await axios.get(`http://localhost:8070/search?query=${searchQuery}`);
        // Pass the search results to the parent component
        onSearch(response.data);
      } catch (error) {
        console.error('Error searching notes:', error.message);
      }
    };

    // Only trigger the search if the searchQuery is not empty
    if (searchQuery.trim() !== '') {
      fetchSearchResults();
    }
  }, [searchQuery, onSearch]);

  return (
    <div className="flex justify-center items-center h-auto sm:h-48 bg-back-gradient p-4 search-div">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-96 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-green-500 search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
