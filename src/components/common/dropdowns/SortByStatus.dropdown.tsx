import React, { useState } from "react";
import sortIcon from "../../../img/sort.svg";

const SortByStatusDropdown: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        // If already selected, remove it
        return prevSelected.filter((item) => item !== option);
      } else {
        // If not selected, add it
        return [...prevSelected, option];
      }
    });
  };

  return (
    <div className="relative inline-block text-left text-black">
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
            className="inline h-4 w-4 sm:h-5 sm:w-5 mr-0 lg:mr-2"
          />
          <div className="hidden sm:inline mr-1">Sort by {` `}</div>
          <div>Status</div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            <label className="flex items-center px-4 py-2 text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
                checked={selectedOptions.includes("To do")}
                onChange={() => handleOptionClick("To do")}
              />
              <span className="ml-2">To do</span>
            </label>
            <label className="flex items-center px-4 py-2 text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
                checked={selectedOptions.includes("In Progress")}
                onChange={() => handleOptionClick("In Progress")}
              />
              <span className="ml-2">In Progress</span>
            </label>
            <label className="flex items-center px-4 py-2 text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
                checked={selectedOptions.includes("Done")}
                onChange={() => handleOptionClick("Done")}
              />
              <span className="ml-2">Done</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByStatusDropdown;
