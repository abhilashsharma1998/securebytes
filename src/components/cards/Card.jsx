import React from "react";
import "./card.css"; // We'll create this file next
import { IoCloudUpload } from "react-icons/io5";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="logo">
          <IoCloudUpload />
        </div>
        <div className="header-text">
          <h2>{item.heading}</h2>
          <p>{item.subheading}</p>
        </div>
      </div>
      <div className="card-footer">
        <span className="read-more">Read More</span>
        <span className="arrow">→</span>
      </div>
    </div>
  );
};

export default Card;
