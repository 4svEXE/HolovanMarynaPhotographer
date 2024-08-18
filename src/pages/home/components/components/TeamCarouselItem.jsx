import React from "react";
import style from "./TeamCarouselItem.module.scss";
import linkedin from "/img/home/in.png";

export default function TeamCarouselItem(props) {
  const { name = "name", img = "/", position = "", link = "/" } = props;

  return (
    <div className={style.cart}>
      <img src={props.img} alt={props.name} className={style.bg} />

      <div className={style.bgGrad}></div>

      <div className={style.cart + " h-full"}>
        <h4 className="text-white">{props.name}</h4>

        <strong className="text-white">{props.position}</strong>

        <div className={style.link + " flex text-white"}>
          <img src={linkedin} alt="linkedin logo" />
          <a href={props.link}>LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
