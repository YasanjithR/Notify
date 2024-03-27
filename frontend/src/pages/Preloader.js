// Preloader.js
import React, { useState, useEffect, useRef } from 'react';


const words = ['welcome', 'to', 'notefy'];

const Preloader = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentCharIndex(currentCharIndex => {
        if (currentCharIndex < words[currentWordIndex].length) {
          return currentCharIndex + 1;
        } else if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(currentWordIndex => currentWordIndex + 1);
          return 0;
        } else {
          clearInterval(typingInterval);
          cursorRef.current.style.visibility = 'visible';
          return currentCharIndex;
        }
      });
    }, 200); // Typing speed

    const typingInterval = setInterval(() => {
      cursorRef.current.style.visibility = cursorRef.current.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }, 500); // Cursor blinking speed

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [currentWordIndex, currentCharIndex]);

  const currentWord = words[currentWordIndex];
  const text = words.map((word, index) =>
    index <= currentWordIndex ? word : ''
  ).join(' ');

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="typing">{text}</div>
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
};

export default Preloader;
