import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainlayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Episodes from "../pages/Episodes/Episodes";
import Merch from "../pages/Merch/Merch";
import Testimonials from "../pages/Testimonials/Testimonials";
import Sponsors from "../pages/Sponsors/Sponsors";

const Allrouts = ({ toggleTheme, mode }) => {
  return (
    <>
      <Routes>
        <Route element={<Mainlayout toggleTheme={toggleTheme} mode={mode} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Route>
      </Routes>
    </>
  );
};

export default Allrouts;
