import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="text-container">
        <Link to={`/profileDetail/${props.authorId}`}>
          <div className="usernameContainer">
            <img
              className="card-profileImage"
              src={props.profileImage}
              alt=""
            />
            <span className="username">{props.username}</span>
          </div>
        </Link>
        <Link to={`/articleDetail/${props.id}`}>
          <div className="title">{props.title}</div>
        </Link>
        <div className="date">{props.date}</div>
      </div>

      <div className="image-container">
        <img className="card-image" src={props.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Card;
