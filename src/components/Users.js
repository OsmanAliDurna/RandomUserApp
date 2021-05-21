import React from "react";
import Email from "../assets/email.svg";
import Phone from "../assets/phone.svg";
import Location from "../assets/location.svg";
import "./Users.css";

const Users = ({ item }) => {
  return (
    <div className="user">
      <div className="user-info">
        <div className="photo">
          <img src={item.picture.large} alt="Random User" className="image" />
          <img src={Email} alt="email" />
          <img src={Phone} alt="phone" />
          <img src={Location} alt="location" />
        </div>

        <div className="info">
          <h1>
            {item.name.title} {item.name.first} {item.name.last}
          </h1>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>
            {item.location.city} - {item.location.state}
          </p>
        </div>
      </div>

      <div className="age-date">
        <p>Age : {item.dob.age}</p>
        <p>Register Date : {item.registered.date.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default Users;
