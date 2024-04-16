import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "Too short!!")
    .max(20, "Too Long!!")
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Name must contain only alphabets"),
  lastname: Yup.string()
    .min(3, "Too Short!!")
    .max(20, "Too Long!!")
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Name must contain only alphabets"),
  emailid: Yup.string().email("Invalid email").required("Required"),
  contactno: Yup.string()
    .matches(/^\d+$/, "Invalid phone number") // react expression to check string that consits only digit
    .min(10, "Invalid!!")
    .max(10, "Invalid!!")
    .required("Required"),
  address: Yup.string()
    .min(5, "Too Short!!")
    .max(35, "Too Long!!")
    .required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  institutename: Yup.string().required("Required"),
});

const StudentRegist = () => {
  const [sformdata, setsformdata] = useState([]);
  const [institutedata, setinstitutedata] = useState([]);
  const [selectedState, setSelectedState] = useState();

  // const history = useHistory(); // Initialize useHistory hook

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

    validationSchema: SignupSchema,
    onSubmit: (values) => {
      setsformdata([...sformdata, values]);
      toast.success(" Submitted!! ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(function () {
        window.location.replace("/studentdata");
      }, 2000);
      formik.resetForm();
    },
  });

  useEffect(() => {
    localStorage.setItem("sformdata", JSON.stringify(sformdata));
    setinstitutedata(JSON.parse(localStorage.getItem("formdata") || "[]"));
  }, [sformdata]);

  const handleStatechange = (e) => {
    setSelectedState(e.target.value);
    formik.handleChange(e);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
              {formik.errors.firstname && formik.touched.firstname && (
                <div className="text-red-500">{formik.errors.firstname}</div>
              )}
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
              {formik.errors.lastname && formik.touched.lastname && (
                <div className="text-red-500">{formik.errors.lastname}</div>
              )}
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
              {formik.errors.emailid && formik.touched.emailid && (
                <div className="text-red-500">{formik.errors.emailid}</div>
              )}
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
              {formik.errors.contactno && formik.touched.contactno && (
                <div className="text-red-500">{formik.errors.contactno}</div>
              )}
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
              {formik.errors.address && formik.touched.address && (
                <div className="text-red-500">{formik.errors.address}</div>
              )}
            </div>
            <div className="w-1/2 ml-2">
              <label className="block mb-2">State</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="state"
                value={formik.values.state}
                onChange={handleStatechange}
              >
                <option value="">Select State</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Uttarpradesh">Uttarpradesh</option>
              </select>
              {formik.errors.state && formik.touched.state && (
                <div className="text-red-500">{formik.errors.state}</div>
              )}
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
                disabled={!selectedState}
              >
                <option value="">Select City</option>
                {selectedState === "Rajasthan" && (
                  <>
                    <option value="Ajmer">Ajmer</option>
                    <option value="Jaipur">Jaipur</option>
                  </>
                )}
                {selectedState === "Delhi" && (
                  <>
                    <option value="Central Delhi">Central Delhi</option>
                    <option value="New Delhi">New Delhi</option>
                  </>
                )}
                {selectedState === "Mumbai" && (
                  <>
                    <option value="Pune">Pune</option>
                    <option value="Thane">Thane</option>
                  </>
                )}
                {selectedState === "Uttarpradesh" && (
                  <>
                    <option value="Meerut">Meerut</option>
                    <option value="Ayodhya">Ayodhya</option>
                  </>
                )}
              </select>
              {formik.errors.city && formik.touched.city && (
                <div className="text-red-500">{formik.errors.city}</div>
              )}
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
              {formik.errors.institutename && formik.touched.institutename && (
                <div className="text-red-500">
                  {formik.errors.institutename}
                </div>
              )}
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
              to="/"
              className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentRegist;
