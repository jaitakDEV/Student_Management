import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import { NavLink } from "react-router-dom";

const StudentRegist = () => {
  const [sformdata, setsformdata] = useState([]);
  const [institutedata, setinstitutedata] = useState([]);
  const formik = useFormik({
    // we have to initialize all feild
    initialValues: {
      firstname: "",
      lastname: "",
      emailid: "",
      contactno: "",
      address: "",
      state: "",
      city: "",
      institutename: "",
    },
    onSubmit: (values) => {
      setsformdata([...sformdata, values]);
      alert("data saved");

      formik.resetForm({});
    },
  });

  useEffect(() => {
    localStorage.setItem("sformdata", JSON.stringify(sformdata));
    setinstitutedata(JSON.parse(localStorage.getItem("formdata") || "[]"));
  }, [sformdata]);

  return (
    <>
      <div className="flex justify-end mb-4">
        <NavLink
          to="/"
          className=" items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Home
        </NavLink>
      </div>
      <div className="max-w-md mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-2xl font-bold mb-4">Student Registration Form</h1>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">First Name</label>
              <input
                className="w-full border rounded py-2 px-3"
                name="firstname"
                type="text"
                value={formik.values.firstname}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block mb-2">Last Name</label>
              <input
                className="w-full border rounded py-2 px-3"
                name="lastname"
                type="text"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">Email Id</label>
              <input
                className="w-full border rounded py-2 px-3"
                name="emailid"
                type="text"
                value={formik.values.emailid}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block mb-2">Contact No</label>
              <input
                className="w-full border rounded py-2 px-3"
                name="contactno"
                type="text"
                value={formik.values.contactno}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">Address</label>
              <input
                className="w-full border rounded py-2 px-3"
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block mb-2">State</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              >
                <option value="">Select State</option>
                <option value="State1">State 1</option>
                <option value="State2">State 2</option>
              </select>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">City</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              >
                <option value="">Select City</option>
                <option value="City1">City 1</option>
                <option value="City2">City 2</option>
              </select>
            </div>

            <div className="w-1/2 mr-2">
              <label className="block mb-2">Institute</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="institutename"
                value={formik.values.institutename}
                onChange={formik.handleChange}
              >
                <option value="">Select Institute!</option>
                {institutedata.map((item, index) => (
                  <option key={index}>{item.institutename}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className=" items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>

            <NavLink
              to="/studentdata"
              className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancle
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentRegist;
