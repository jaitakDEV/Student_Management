import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Heading from "./Components/Heading";

const Studentdata = () => {
  const [sstoreddata, setsstoreddata] = useState([]);
  const tableHead = {
    col: [
      "First Name",
      "Last Name",
      "Email Id",
      "Contact No.",
      "Address",
      "State",
      "City",
      "Institute Name",
    ],
  };

  useEffect(() => {
    setsstoreddata(JSON.parse(localStorage.getItem("sformdata") || "[]"));
  }, []);
  return (
    <>
      <Heading />
      <div className="flex justify-end mb-4">
        <NavLink
          to="/studentregist"
          className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Student
        </NavLink>
      </div>
      <div>
        {Array.isArray(sstoreddata) && (
          <table
            align={"center"}
            width={"1024px"}
            style={{ marginTop: "50px" }}
          >
            <thead
              style={{
                backgroundColor: "white",
                height: "40px",
                padding: "5px",
                color: "black",
              }}
            >
              <tr>
                {tableHead.col.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sstoreddata.map((item, index) => (
                <tr key={index}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.emailid}</td>
                  <td>{item.contactno}</td>
                  <td>{item.address}</td>
                  <td>{item.state}</td>
                  <td>{item.city}</td>
                  <td>{item.institutename}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Studentdata;
