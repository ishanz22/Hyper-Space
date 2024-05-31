import Link from "next/link";
import React from "react";

const Button = ({ href, color, children }) => {
  return (
    <Link href={href}>
    <div className={`bg-${color}-500 hover:bg-${color}-700 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-white`}>
     
        <div>{children}</div>
   
    </div>
    </Link>
  );
};

export default Button;
