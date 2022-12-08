import React from "react";
import FoodBanners from "pages/FoodBanners";
import RightMenuBar from "pages/RightMenuBar";
import MenuFive from "pages/MenuFive";
import MenuFour from "pages/MenuFour";
import MenuThree from "pages/MenuThree";
import MenuTwo from "pages/MenuTwo";
import MenuOne from "pages/MenuOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/menutwo" element={<MenuTwo />} />
        <Route path="/menuthree" element={<MenuThree />} />
        <Route path="/menufour" element={<MenuFour />} />
        <Route path="/menufive" element={<MenuFive />} />
        <Route path="/rightmenubar" element={<RightMenuBar />} />
        <Route path="/foodbanners" element={<FoodBanners />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
