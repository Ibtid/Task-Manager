import React from 'react';

import onGoingIcon from '../../../img/ongoing.svg'
import doneIcon from '../../../img/done.svg'
import hourGlass from '../../../img/hourglass.svg'


interface IStatusComponentProps {
  status: 'todo' | 'completed' | 'in progress'; // Define the possible status values
}

const StatusComponent: React.FC<IStatusComponentProps> = ({ status }) => {
  let statusComponent: JSX.Element | null;

  switch (status) {
    case 'todo':
      statusComponent = (
        <div className="text-sm flex items-center bg-yellow-500 transition duration-300 ease-in-out text-white font-semibold py-2 px-2 sm:px-3 rounded mb-2 sm:mb-0 sm:mr-0">
          <img
            src={hourGlass}
            alt="ongoing"
            className="inline h-4 w-4 sm:h-5 sm:w-5 mr-0 lg:mr-2"
          />
          <div className="hidden lg:inline">To Do</div>
        </div>
      );
      break;
    case 'completed':
      statusComponent = (
        <button className="text-sm flex items-center bg-gray-500 transition duration-300 ease-in-out text-white font-semibold py-2 px-2 sm:px-3 rounded mb-2 sm:mb-0 sm:mr-0">
          <img
            src={doneIcon}
            alt="ongoing"
            className="inline h-4 w-4 sm:h-5 sm:w-5 mr-0 lg:mr-2"
          />
          <div className="hidden lg:inline">Completed</div>
        </button>
      );
      break;
    // Add more cases as needed
    case 'in progress':
      statusComponent = (
        <button className="text-sm flex items-center bg-green-500 transition duration-300 ease-in-out text-white font-semibold py-2 px-2 sm:px-3 rounded mb-2 sm:mb-0 sm:mr-0">
          <img
            src={onGoingIcon}
            alt="ongoing"
            className="inline h-4 w-4 sm:h-5 sm:w-5 mr-0 lg:mr-2 animate-spin"
          />
          <div className="hidden lg:inline">Ongoing</div>
        </button>
      );
      break;
    
    default:
      statusComponent = null; // Default case, or handle unknown status
      break;
  }

  return statusComponent;
};

export default StatusComponent;
