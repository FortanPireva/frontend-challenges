import React, { useState } from "react";
import css from "./Step1.module.scss";
const Step1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = () => {};

  const handlePhoneChange = () => {};
  const handleEmailChange = () => {};
  return (
    <div className={css.container}>
      <div className={css.info}>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number</p>
      </div>
      <div className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">PhoneNumber</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </div>
      </div>

      <div className="next">
        <button>Next Step</button>
      </div>
    </div>
  );
};

export default Step1;
