import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Heading from "./Components/Heading";

const Institutedata = () => {
  const [storedformdata, setstoredformdata] = useState([]);

  const tableHead = {
    col: [
      "Institute Name",
      "Address",
      "EmailId",
      "Contact No",
      "State",
      "City",
      "Institute Type",
      "Status",
    ],
  };

  useEffect(() => {
    setstoredformdata(JSON.parse(localStorage.getItem("formdata") || "[]"));
  }, []);

  return (
    <>
      <Heading />
      <div className="flex justify-end mb-4">
        <NavLink
          to="/instituteregist"
          className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Institute
        </NavLink>
      </div>
      <div>
        {Array.isArray(storedformdata) && (
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
              {storedformdata.map((item, index) => (
                <tr key={index}>
                  <td>{item.institutename}</td>
                  <td>{item.address}</td>
                  <td>{item.emailid}</td>
                  <td>{item.contactno}</td>
                  <td>{item.state}</td>
                  <td>{item.city}</td>
                  <td>{item.institutetype}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Institutedata;
