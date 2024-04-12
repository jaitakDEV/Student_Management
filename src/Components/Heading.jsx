import React from "react";
import { NavLink } from "react-router-dom";

const Heading = () => {
  return (
    <>
      <div className="text-center font-bold text-3xl text-black mb-8">
        Student Management
      </div>
      <div className="flex justify-center">
        <div className="flex mb-4">
          <NavLink
            to="/institutedata"
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mr-2 focus:outline-none focus:shadow-outline"
          >
            Institute Master
          </NavLink>
          <NavLink
            to="/studentdata"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
          >
            Student Master
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Heading;
