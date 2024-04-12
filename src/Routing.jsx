import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Instituteregist from "./Instituteregist";
import Institutedata from "./Institutedata";
import StudentRegist from "./StudentRegist";
import Studentdata from "./Studentdata";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/instituteregist",
    element: <Instituteregist />,
  },
  {
    path: "/institutedata",
    element: <Institutedata />,
  },
  {
    path: "/studentregist",
    element: <StudentRegist />,
  },
  {
    path: "/studentdata",
    element: <Studentdata />,
  },
]);
const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
