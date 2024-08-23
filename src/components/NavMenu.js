import React from 'react';

const NavMenu = ({ items, activeItem, onItemClick }) => (
  <nav className="flex overflow-x-auto whitespace-nowrap p-2 border-b">
    {items.map((item, index) => (
      <button
        key={index}
        className={`px-3 py-1 mr-2 ${activeItem === item ? 'text-blue-600 font-bold' : ''}`}
        onClick={() => onItemClick(item)}
      >
        {item}
      </button>
    ))}
  </nav>
);

export default NavMenu;