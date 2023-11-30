import React, { FC, Fragment, useState } from "react";
import useForm from "../../hooks/useForm";

const EditTaskForm: FC = () => {
  const { formData, formErrors, handleChange, validateForm } = useForm({
    title: "Garden",
    description: "I need to water everyday",
    selectedDate: "",
    status: "To Do",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the form data (e.g., send it to a server)
      console.log("Form is valid:", formData);
    } else {
      console.log("Form is not valid");
    }
  };
  return (
    <Fragment>
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-slate-50 shadow-md rounded-md p-8 w-full max-w-md mb-80 sm:mb-20">
        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border-2 rounded-md w-full"
            />
            <span className="text-red-500 text-xs">{formErrors.title}</span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border-2 rounded-md w-full"
            />
            <span className="text-red-500 text-xs">
              {formErrors.description}
            </span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="selectedDate"
              className="block text-lg font-medium text-gray-700"
            >
              Select a Date:
            </label>
            <input
              type="date"
              id="selectedDate"
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleChange}
              className="mt-1 p-2 border-2 rounded-md w-full"
            />
            <span className="text-red-500 text-xs">
              {formErrors.selectedDate}
            </span>
          </div>

          <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-lg font-medium text-gray-700"
              >
                Status:
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 p-2 border-2 rounded-md w-full focus:outline-none focus:border-blue-500"
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTaskForm;
