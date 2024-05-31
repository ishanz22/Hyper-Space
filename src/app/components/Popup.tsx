import React from "react";
import Button from "./Button";

function Popup() {
  console.log("hello im server component");

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      <div className="bg-white p-8 rounded shadow-lg relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Popup to get the job
        </h2>
        <p className="text-black">Please hire me 🥺</p>
        <div className="pt-10 flex items-center justify-center">
          <Button href="/another-page" color="green">
            Let's Work Together!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
