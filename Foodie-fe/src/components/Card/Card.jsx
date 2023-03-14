import "./card.css";
import Order from "../../assets/order.jpg";
import { Rafiki, Waiters } from "../../assets/svg";

export default function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={Order} alt="order" />
        <p className="title-p card-1">easy to order</p>
        <p className="text-p card-1">
          You only need a few steps in ordering food
        </p>
      </div>
      <div className="card">
        <Rafiki />
        <p className="title-p card-2">Fastest Delivery</p>
        <p className="text-p card-2">
          Delivery that is always ontime even faster
        </p>
      </div>
      <div className="card">
        <Waiters />
        <p className="title-p card-3">Best Quality</p>
        <p className="text-p card-3">
          Not only fast for us quality is also number one
        </p>
      </div>
    </div>
  );
}
