import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { NavLink } from "react-router-dom";

const Instituteregist = () => {
  const [formdata, setformdata] = useState([]);

  const formik = useFormik({
    // we have to initialize all feild
    initialValues: {
      institutename: "",
      address: "",
      emailid: "",
      contactno: "",
      state: "",
      city: "",
      institutetype: "",
      status: "",
    },

    onSubmit: (values) => {
      setformdata([...formdata, values]);
      alert("data saved");

      formik.resetForm();
    },
  });

  useEffect(() => {
    localStorage.setItem("formdata", JSON.stringify(formdata));
  }, [formdata]);

  return (
    <>
      <div className="flex justify-end mb-4">
        <NavLink
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline"
        >
          Home
        </NavLink>
      </div>
      <div className="max-w-md mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-2xl font-bold mb-4">
            Institute Registration Form
          </h1>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">Name of Institute</label>
              <input
                className="w-full border rounded py-2 px-3"
                type="text"
                name="institutename"
                value={formik.values.institutename}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block mb-2">Address</label>
              <input
                className="w-full border rounded py-2 px-3"
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">Email Id</label>
              <input
                className="w-full border rounded py-2 px-3"
                type="text"
                name="emailid"
                value={formik.values.emailid}
                onChange={formik.handleChange}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block mb-2">Contact No.</label>
              <input
                className="w-full border rounded py-2 px-3"
                type="text"
                name="contactno"
                value={formik.values.contactno}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">State:</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              >
                <option>Select State:</option>
                <option>State1</option>
                <option>State2</option>
                <option>State3</option>
              </select>
            </div>

            <div className="w-1/2 mr-2">
              <label className="block mb-2">City:</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              >
                <option>Select City:</option>
                <option>City1</option>
                <option>City2</option>
                <option>City3</option>
              </select>
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">Types of Institute</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="institutetype"
                value={formik.values.institutetype}
                onChange={formik.handleChange}
              >
                <option>Select Type:</option>
                <option>Govt.</option>
                <option>Private</option>
              </select>
            </div>

            <div className="w-1/2 mr-2">
              <label className="block mb-2">Co-Ed Status:</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              >
                <option>Select status:</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>Co-Ed</option>
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
              to="/institutedata"
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

export default Instituteregist;
