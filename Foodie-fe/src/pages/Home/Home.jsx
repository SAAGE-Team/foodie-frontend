import "./home.css";

import samosaImage from "./../../assets/samosa-image.png";
import clock from "./../../assets/clock.png";
import fire from "./../../assets/noto_fire.png";
import arrow from "./../../assets/arrow.png";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import {
  FoodieLogo,
  Injugu,
  Lock,
  SearchIcon,
  DropdownIcon,
} from "../../assets/svg";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="navbar">
        <div className="nav-left">
          <a href="#home">
            <FoodieLogo />
          </a>
        </div>
        <div className="nav-center">
          <ul>
            <li className="nav-component active">why foodie?</li>
            <li className="nav-component">
              services <DropdownIcon />
              <ul>
                <li>Order</li>
                <li>Delivery</li>
              </ul>
            </li>
            <li className="nav-component">
              menu <DropdownIcon />
              <ul>
                <li>Ikiraha</li>
                <li>Injugu</li>
              </ul>
            </li>
            <li className="nav-component">contact</li>
          </ul>
        </div>
        <div className="nav-right">
          <SearchIcon />
          <Lock />
        </div>
      </div>

      <div className="home-top">
        <div className="home-top-left">
          <p id="intro-p">
            be the fastest in delivering your <span>food</span>
          </p>
          <p className="smaller-p">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery
          </p>

          <Button value="Get started" />
        </div>
        <div className="home-top-right">
          <img src={samosaImage} id="samosaImage" alt="samosa image" />
          <img src={clock} alt="clock" id="clock" />
          <img src={arrow} id="arrow" alt="Artistic arrow" />
          <img src={fire} id="fire" alt="Fire" />
          <Injugu />
        </div>
      </div>

      <div className="services">
        <div className="titles">
          <p id="title" className="title">
            what we serve
          </p>
          <p id="service-p" className="big-p">
            Your Favorite Food Delivery Partner
          </p>
        </div>

        <div className="cards">
          <Card />
        </div>

        <div className="menu">
          <div className="titles">
            <div className="left">
              <p id="menu-title" className="title">
                our menu
              </p>
              <div className="big-p">
                <p id="big-p">Menu That Always Makes You Fall In Love</p>
              </div>
            </div>
            <div className="right"></div>
          </div>
          <div className="options">
            <div className="option active">
              <div className="icon"></div>
              <div className="text">all</div>
            </div>
            <div className="option">
              <div className="icon"></div>
              <div className="text"></div>
            </div>
            <div className="option">
              <div className="icon"></div>
              <div className="text"></div>
            </div>
            <div className="option">
              <div className="icon"></div>
              <div className="text"></div>
            </div>
            <div className="option">
              <div className="icon"></div>
              <div className="text"></div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
