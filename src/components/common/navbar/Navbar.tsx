import React from "react";
import AddButton from "../buttons/add.button";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Task Manager</div>
        <div className="flex space-x-4">
          <AddButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
