import React from 'react'

const AddButton = ({ onClick }) => {
    return (
      <div className="fixed bottom-4 right-4">
        <button className="bg-green-500 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none hover:bg-green-600"
        onClick={onClick}>
          +
        </button>
      </div>
    );
  };
  
  
  export default AddButton;
  