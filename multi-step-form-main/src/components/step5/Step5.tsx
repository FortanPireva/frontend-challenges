import React from "react";
import ThankYouIcon from "../../assets/images/icon-thank-you.svg";
import css from "./Step5.module.scss";
const Step5 = () => {
  return (
    <div className={css.container}>
      <div className={css.icon}>
        <img src={ThankYouIcon} />
      </div>
      <div className={css.info}>
        <h1>Thank You!</h1>
        <p>
          Thank you! Thanks for confirming your subscription! We hope you have
          fun using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Step5;
