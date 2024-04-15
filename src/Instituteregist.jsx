import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  institutename: Yup.string()
    .min(5, "Too Short!!")
    .max(20, "Too Long!!")
    .required("Required"),
  address: Yup.string()
    .min(5, "Too Short!!")
    .max(35, "Too Long!!")
    .required("Required"),
  emailid: Yup.string().email("Invalid email").required("Required"),
  contactno: Yup.string()
    .matches(/^\d+$/, "Invalid phone number")
    .min(10, "Too Short!!")
    .max(11, "Too Long")
    .required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  institutetype: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
});

const Instituteregist = () => {
  const [formdata, setformdata] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [selectInstitute, setSelectInstitute] = useState();

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

    validationSchema: SignupSchema,
    onSubmit: (values) => {
      setformdata([...formdata, values]);
      alert("data saved");

      formik.resetForm();
    },
  });

  useEffect(() => {
    localStorage.setItem("formdata", JSON.stringify(formdata));
  }, [formdata]);

  const handleStatechange = (e) => {
    setSelectedState(e.target.value);
    formik.handleChange(e);
  };

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
                autoComplete={"false"}
              />
              {formik.errors.institutename &&
                formik.touched.institutename && ( //short circuits
                  <div className="text-red-500">
                    {formik.errors.institutename}
                  </div>
                )}
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
              {formik.errors.address && formik.touched.address && (
                <div className="text-red-500">{formik.errors.address}</div>
              )}
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
              {formik.errors.emailid && formik.touched.emailid && (
                <div className="text-red-500">{formik.errors.emailid}</div>
              )}
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
              {formik.errors.contactno && formik.touched.contactno && (
                <div className="text-red-500">{formik.errors.contactno}</div>
              )}
            </div>
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block mb-2">State:</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="state"
                value={formik.values.state}
                onChange={handleStatechange}
              >
                <option>Select State:</option>
                <option>Rajasthan</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Uttarpradesh</option>
              </select>
              {formik.errors.state && formik.touched.state && (
                <div className="text-red-500">{formik.errors.state}</div>
              )}
            </div>

            <div className="w-1/2 mr-2">
              <label className="block mb-2">City:</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                disabled={!selectedState} //Disable city dropdown if no state is selected
              >
                <option>Select City:</option>
                {selectedState === "Rajasthan" && (
                  <>
                    <option value="Ajmer">Ajmer</option>
                    <option value="Jaipur">Jaipur</option>
                  </>
                )}
                {selectedState === "Delhi" && (
                  <>
                    <option value="Centaral Delhi">Central Delhi</option>
                    <option value="New Delhi">New Delhi</option>
                  </>
                )}
                {selectedState === "Mumbai" && (
                  <>
                    <option value="Pune">Pune</option>
                    <option value="Thane">thane</option>
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
              {formik.errors.institutetype && formik.touched.institutetype && (
                <div className="text-red-500">
                  {formik.errors.institutetype}
                </div>
              )}
            </div>

            <div className="w-1/2 mr-2">
              <label className="block mb-2">Co-Ed Status:</label>
              <select
                className="w-full border rounded py-2 px-3"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                // disabled={!selectInstitute} //disabled when institute type is not selected
              >
                <option>Select status:</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>Co-Ed</option>
              </select>
              {formik.errors.status && formik.touched.status && (
                <div className="text-red-500">{formik.errors.status}</div>
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
