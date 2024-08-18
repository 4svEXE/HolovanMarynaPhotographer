import React from "react";
import style from "./RevivesCarouselItem.module.scss";

function RevivesCarouselItem(props) {
  const { text = "text", img = "/", position = "" } = props;

  return (
    <div className={style.cart + " custom-styles"}>
      <p>{text}</p>

      <div className="flex flex-wrap">
        <img src={img} alt={position} />
        <span>{position}</span>
      </div>
    </div>
  );
}

export default RevivesCarouselItem;
