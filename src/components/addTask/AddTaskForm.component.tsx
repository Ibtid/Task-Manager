import React, { FC, Fragment, useState } from "react";

const AddTaskForm: FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    selectedDate: "",
    status: "To Do", // Default status
  });

  const [formErrors, setFormErrors] = useState({
    title: "",
    description: "",
    selectedDate: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (formData.title.trim() === "" || formData.title.length > 15) {
      newErrors.title =
        "Title is required and should be less than 15 characters";
      valid = false;
    } else {
      newErrors.title = "";
    }

    if (
      formData.description.trim() === "" ||
      formData.description.length > 80
    ) {
      newErrors.description =
        "Description is required and should be less than 80 characters";
      valid = false;
    } else {
      newErrors.description = "";
    }

    if (!formData.selectedDate) {
      newErrors.selectedDate = "Please select a date";
      valid = false;
    } else {
      newErrors.selectedDate = "";
    }

    setFormErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the form data (e.g., send it to a server)
      console.log("Form is valid:", formData);
    } else {
      console.log("Form is not valid");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Fragment>
      <div className="container mx-auto mt-8 p-4 sm:p-0">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
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
              className="mt-1 p-2 border-2 rounded-md w-full mb-4"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddTaskForm;
