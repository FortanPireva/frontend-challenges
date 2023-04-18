import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import css from "./Step1.module.scss";
interface Step1Props {
  onNext: () => void | {};
}

const Step1 = ({ onNext }: Step1Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">PhoneNumber</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={"e.g +49 17612738396"}
          />
        </div>
      </div>

      <div className="buttons">
        <button className="next" onClick={onNext}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1;
