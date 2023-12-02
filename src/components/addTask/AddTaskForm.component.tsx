import React, { FC, Fragment, useState } from "react";
import useForm from "../../hooks/useForm";
import dispatch from "../../dispatch/dispatch";
import actions from "../../dispatch/actions";
import { Spinkit } from "../../modals";
import { useDispatch } from "react-redux";
import { ITask } from "../../interfaces/task";
import { addTodo } from "../../redux/todosSlice";
import { useNavigate } from "react-router-dom";
import UiPaths from "../../paths/uiPaths";
import { generateUniqueNumber } from "../../utils/generateUniqueId";

const AddTaskForm: FC = () => {
  const dispatchTodo = useDispatch();
  const { formData, formErrors, handleChange, validateForm } = useForm({
    title: "",
    description: "",
    selectedDate: "",
    status: "todo",
  });
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      let newTodo: ITask = {
        title: formData.title,
        description: formData.description,
        status: formData.status,
        id: generateUniqueNumber(),
        due: formData.selectedDate,
      };
      let bodyForDummyApi = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      };
      let response = await dispatch({
        action: actions.addTask,
        headerParams: {},
        body: bodyForDummyApi,
        token: "",
      });
      if (response.data) {
        dispatchTodo(addTodo(newTodo));
        navigate(UiPaths.TasksList);
      }
      setLoading(false);
    } else {
      console.log("Form is not valid");
    }
  };
  return (
    <Fragment>
      {loading && <Spinkit />}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-slate-50 shadow-md rounded-md p-8 w-full max-w-md mb-80 sm:mb-20">
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
                className="mt-1 p-2 border-2 rounded-md w-full focus:outline-none focus:border-blue-500"
              >
                <option value="todo">To Do</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Done</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddTaskForm;
