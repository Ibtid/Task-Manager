import { FC, Fragment, useState } from "react";
import calender from "../../img/calender.svg";
import EditButton from "../common/buttons/edit.buttons";
import DeleteButton from "../common/buttons/delete.button";
import UiPaths from "../../paths/uiPaths";
import { useNavigate } from "react-router-dom";
import StatusComponent from "../common/status/Status.component";
import { ITask, ITaskCardProps } from "../../interfaces/task";
import { useDispatch } from "react-redux";
import { deleteTodo, selectTask, selectedTask } from "../../todosSlice";
import { useSelector } from "react-redux";
import { ConfirmationCardModal, Spinkit } from "../../modals";
import dispatch from "../../dispatch/dispatch";
import actions from "../../dispatch/actions";
import { formatDate } from "../../utils/formateDate";

export const TaskCard: FC<ITaskCardProps> = ({
  id,
  title,
  description,
  status,
  due,
}) => {
  let navigate = useNavigate();
  let dispatchTodo = useDispatch();
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  const handleSubmit = async () => {

    
      setLoading(true)
      let bodyForDummyApi = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      };
      let response =await dispatch({ action: actions.deleteTask,
      headerParams: {},
      body: bodyForDummyApi,
      token: '',})
      console.log(response);
      setShowModal(false)
      if(response.data){
        dispatchTodo(deleteTodo(id));
        navigate(UiPaths.TasksList)
      }
      setLoading(false)
    
  };
  return (
    <Fragment>
      {loading && <Spinkit/>}
      {showModal && (
        <ConfirmationCardModal
          taskName={"Gardening"}
          onConfirm={() => {
            handleSubmit()
          }}
          onCancel={() => {
            setShowModal(false);
          }}
        />
      )}
      <div className="flex flex-col justify-between bg-slate-50 p-6 rounded-lg shadow-md max-w-lg mx-auto sm:max-w-xl lg:max-w-2xl xl:max-w-3xl w-72 md:w-80 lg:w-96">
        <div className="flex flex-col items-center justify-between lg:flex-row mb-6">
          <div className="text-2xl lg:text-2xl font-semibold mb-4 lg:mb-0">
            {title}
          </div>
          <div className="flex items-center text-xs md:text-sm">
            <div className="bg-gray-200 pt-1 pb-1 pr-2 pl-2 text rounded-l-md flex items-center">
              <img
                src={calender}
                alt="calender"
                className="inline h-4 w-4 sm:h-5 sm:w-5 md:mr-1"
              />
              <div className="hidden md:inline">Due</div>
            </div>
            <div className="bg-gray-100 pt-1 pb-1 pr-2 pl-2 rounded-r-md">
              {formatDate(due)}
            </div>
          </div>
        </div>
        <div className="text-gray-700 mb-8 text-md md:text-lg">
          {description}
        </div>
        <div className="flex flex-row items-center">
          <StatusComponent status={status} />
          <EditButton
            onClick={() => {
              console.log(due)
              let taskToBeEdited: ITask = {
                title: title,
                description: description,
                status: status,
                id: id,
                due: due,
              };
              dispatchTodo(selectTask(taskToBeEdited));
              navigate(UiPaths.EditTask);
            }}
          />
          <DeleteButton
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};
