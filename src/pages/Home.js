import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css"
import Breakfast from "../Images/breakfast.png"

export const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Breakfast})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Famous Gujrati Breakfast </p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

