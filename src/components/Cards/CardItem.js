import React from "react";
import { Link } from "react-scroll";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link to={props.path} className="card__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="service pic"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
