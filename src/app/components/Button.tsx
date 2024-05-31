import Link from "next/link";
import React from "react";

const Button = ({ href, color, children }) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700",
    red: "bg-red-500 hover:bg-red-700",
    green: "bg-green-500 hover:bg-green-700",
  };

  const buttonColor = colorClasses[color] || "bg-gray-500 hover:bg-gray-700";

  return (
    <Link href={href}>
      <div className={`font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-white ${buttonColor}`}>
        <div>{children}</div>
      </div>
    </Link>
  );
};

export default Button;
