import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';

const HomeButton = () => {
  return (
    <div className="fixed bottom-4 left-4">
      <Link to="/home">
        <button className="bg-note-gradient text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none hover:bg-black">
          <MdHome />
        </button>
      </Link>
    </div>
  );
};

export default HomeButton;
