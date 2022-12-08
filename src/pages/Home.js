import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">MenuOne</Link>
        </li>
        <li>
          <Link to="/menutwo">MenuTwo</Link>
        </li>
        <li>
          <Link to="/menuthree">MenuThree</Link>
        </li>
        <li>
          <Link to="/menufour">MenuFour</Link>
        </li>
        <li>
          <Link to="/menufive">MenuFive</Link>
        </li>
        <li>
          <Link to="/rightmenubar">RightMenuBar</Link>
        </li>
        <li>
          <Link to="/foodbanners">FoodBanners</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
