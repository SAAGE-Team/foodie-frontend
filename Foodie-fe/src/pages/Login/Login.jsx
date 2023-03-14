import "./login.css";

import { Link } from "react-router-dom";

import samosaImage from "./../../assets/samosa-image.png";
import clock from "./../../assets/clock.png";
import fire from "./../../assets/noto_fire.png";
import arrow from "./../../assets/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FoodieLogo } from "./../../assets/svg";

export default function Login() {
  return (
    <div className="login">
      <div className="login-left">
        {/* <SignUpImage/> */}
        <img src={samosaImage} id="foodieImage" />
        <img src={clock} alt="clock" id="clock" />
      </div>
      <div className="login-center"></div>
      <div className="login-right">
        <div className="top">
          <FoodieLogo />
        </div>
        <div className="form">
          <h2>login</h2>
          <p>Welcome back!</p>
          <form action="#" method="post">
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
            />
            <input
              type="password"
              name="passwd"
              id="passwd"
              placeholder="Enter password"
            />
            <div className="change">Change your number?</div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}
