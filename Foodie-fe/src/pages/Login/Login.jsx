import "./login.css";

import samosaImage from "./../../assets/samosa-image.png";
import clock from "./../../assets/clock.png";
import fire from "./../../assets/noto_fire.png";
import arrow from "./../../assets/arrow.png";
import frame30 from './../../assets/fame-30.png'
import frame31 from './../../assets/frame-31.jpg'
import shopping from './../../assets/Shopping-04.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FoodieLogo } from "./../../assets/svg";

export default function Login() {
  return (
    <div className="register">
      <div className="register-left">
        {/* <SignUpImage/> */}
        <img src={samosaImage} id="foodieImage" />
        <img src={frame30} alt="" className="frame-30"/>
        <img src={frame31} alt="" className="frame-31"/>
      </div>
      <div className="register-center"></div>
      <div className="register-right">
        <div className="top">
          <FoodieLogo />
          <img src={shopping} alt="" />
        </div>
        <div className="form">
          <p>Welcome back, Bill!</p>
          <form action="#" method="post">
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter your number"
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
            <div className="text">or sign in with</div>
            <div className="line"></div>
            <div className="google">
              <FontAwesomeIcon icon="fa-brands fa-google" />
            </div>
          </div>
        </div>
        <div className="no-account">
          <p>
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
