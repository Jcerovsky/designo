import React from "react";

function Menu({ style }: { style?: string }) {
  return (
    <ul className={`transition-transform duration-300 ${style}`}>
      <li className="cursor-pointer hover:underline hover:scale-95">
        OUR COMPANY
      </li>
      <li className="cursor-pointer hover:underline hover:scale-95">
        LOCATIONS
      </li>
      <li className="cursor-pointer hover:underline hover:scale-95">CONTACT</li>
    </ul>
  );
}

export default Menu;
