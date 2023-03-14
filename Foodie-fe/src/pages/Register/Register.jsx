import "./register.css";

import {Link} from 'react-router-dom';

import samosaImage from "./../../assets/samosa-image.png";
import clock from "./../../assets/clock.png";
import fire from "./../../assets/noto_fire.png";
import arrow from "./../../assets/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FoodieLogo } from "./../../assets/svg";

export default function Register() {
  return (
    <div className="register">
      <div className="register-left">
        {/* <SignUpImage/> */}
        <img src={samosaImage} id="foodieImage" />
        <img src={clock} alt="clock" id="clock" />
      </div>
      <div className="register-center"></div>
      <div className="register-right">
        <div className="top">
          <FoodieLogo />
        </div>
        <div className="form">
          <h2>sign up</h2>
          <p>We are glad U're here!</p>
          <form action="#" method="post">
            <input
              type="text"
              name="username"
              id="uname"
              placeholder="Enter username"
            />
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
            <input type="submit" value="Next" />
          </form>
        </div>
        <div className="alternative">
          <div className="alternative-heading">
            <div className="line"></div>
            <div className="text">or sign up with</div>
            <div className="line"></div>
            <div className="google">
              <FontAwesomeIcon icon="fa-brands fa-google" />
            </div>
          </div>
        </div>
        <div className="no-account">
          <p>
            You already have an account? <Link to="/login"><span>Login</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
