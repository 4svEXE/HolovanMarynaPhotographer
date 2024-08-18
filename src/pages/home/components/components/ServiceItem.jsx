import React from "react";
import "./ServiceItem.scss";

export default function ServiceItem(props) {
  return (
    <div className="service-item flex flex-col items-center lg:items-start">
      <img src={props.img} alt="Blockchain icon" />
      <span className="service-item text-center lg:text-left text-white">
        {props.title}
      </span>
    </div>
  );
}
