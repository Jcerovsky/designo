import React from "react";

function Menu({ style }: { style?: string }) {
  return (
    <ul className={style}>
      <li className="cursor-pointer hover:underline hover:scale-95">
        <a href="/about">OUR COMPANY</a>
      </li>
      <li className="cursor-pointer hover:underline hover:scale-95">
        <a href="/locations">LOCATIONS</a>
      </li>
      <li className="cursor-pointer hover:underline hover:scale-95">
        {" "}
        <a href="/contact">CONTACT</a>
      </li>
    </ul>
  );
}

export default Menu;
