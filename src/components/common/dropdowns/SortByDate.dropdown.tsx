import React, { useState } from "react";

import sortIcon from "../../../img/sort.svg";

const SortByDateDropdown: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center bg-blue-500 text-white font-semibold py-2 px-2 sm:px-3 rounded cursor-pointer ml-2 mr-2 mb-2 sm:mb-0 sm:mr-4"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          <img
            src={sortIcon}
            alt="edit"
            className="inline h-4 w-4 sm:h-5 sm:w-5  mr-0 lg:mr-2"
          />
          <div className="hidden sm:inline mr-1">Sort by {` `}</div>
          <div>Date</div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Due Today
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Over Due
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              Due in Future
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByDateDropdown;
