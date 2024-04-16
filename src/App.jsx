import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Instituteregist from "./Instituteregist";
import Institutedata from "./Institutedata";
import StudentRegist from "./StudentRegist";
import Studentdata from "./Studentdata";
import Routing from "./Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Home /> */}
      {/* <Instituteregist /> */}
      {/* <Institutedata /> */}
      {/* <StudentRegist /> */}
      {/* <Studentdata /> */}
      <Routing basename="/Student_Management" />
    </>
  );
}

export default App;
