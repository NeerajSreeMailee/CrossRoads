import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Mainlayout = ({ toggleTheme, mode }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} mode={mode}/>
      <Outlet />
    </>
  );
};

export default Mainlayout;
