import React from 'react'
import ongoingIcon from "../../../img/ongoing.svg";
const OngoingButton= () => {
  return (
    <button className="flex items-center bg-green-500 transition duration-300 ease-in-out hover:bg-green-600 text-white font-semibold py-2 px-2 sm:px-3 rounded mb-2 sm:mb-0 sm:mr-0">
            <img
              src={ongoingIcon}
              alt="ongoing"
              className="inline h-4 w-4 sm:h-5 sm:w-5  mr-0 lg:mr-2 animate-spin"
            />
            <div className="hidden lg:inline">Ongoing</div>
          </button>
  )
}

export default OngoingButton