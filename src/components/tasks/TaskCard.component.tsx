import { FC, Fragment } from "react";
import calender from "../../img/calender.svg";
import OngoingButton from "../common/buttons/ongoing.button";
import EditButton from "../common/buttons/edit.buttons";
import DeleteButton from "../common/buttons/delete.button";

export const TaskCard: FC = () => {
  return (
    <Fragment>
      <div className="bg-slate-50 p-6 rounded-lg shadow-md max-w-lg mx-auto sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <div className="flex flex-col items-center justify-between lg:flex-row mb-6">
          <div className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-0">Water Plants</div>
          <div className="flex items-center text-xs md:text-sm">
            <div className="bg-gray-200 pt-1 pb-1 pr-2 pl-2 text rounded-l-md flex items-center">
              <img
                src={calender}
                alt="calender"
                className="inline h-4 w-4 sm:h-5 sm:w-5 md:mr-1"
              />
              <div className="hidden md:inline">Due</div>
            </div>
            <div className="bg-gray-100 pt-1 pb-1 pr-1 pl-2">Aug 29,</div>
            <div className="bg-gray-100 pt-1 pb-1 pr-2 pl-0 rounded-r-md">2023</div>
          </div>
        </div>
        <div className="text-gray-700 mb-8 text-md md:text-lg">Mother is out for a week. I should not forget to water plants</div>
        <div className="flex flex-row items-center">
          <OngoingButton/>
          <EditButton/>
          <DeleteButton/>
        </div>
      </div>
    </Fragment>
  );
};