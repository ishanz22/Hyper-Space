'use client'

import { useState } from 'react';
import Popup from './components/Popup';

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <header className="text-center mb-8">
        <h1 className=" text-4xl font-bold ">Welcome to HyperSpace</h1>
        <p className="text-lg text-gray-600 mt-2">Discover the universe with us!</p>
      </header>
      <button
        onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-700  font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-white"

      >
        Click here
      </button>
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </div>
  );
}
