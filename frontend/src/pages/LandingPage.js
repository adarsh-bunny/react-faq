import React from "react";
import pic from "../faq.jpeg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Welcome in</p>
          <span>FAQ module</span>
        </div>
<div className="text-section font__p p__size">
          It is  a forum about asking querries related to our services
          <br />
          If You are looking for answers on questions like:
          <ul>
            <li>How to get enroll?</li>
            <li>Bnefits to join our services</li>
            <li>How to get best offers?</li>
            <li>or You just want to share Your experience with our services</li>
          </ul>
          <div className="text-button-wrapper">
            <Link to="/register">Register in</Link> and add your questions!
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={pic} className="landing-image" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
