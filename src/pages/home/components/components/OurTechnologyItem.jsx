import React from "react";
import styles from "./OurTechnologyItem.module.scss";

export default function OurTechnologyItem(props) {
  const { title = "Title", img = "/", tags = [], text = "text" } = props;

  return (
    <div
      className={
        styles.cart +
        " flex flex-col p-7 m-3 bg-black dark:bg-purple-grad rounded-xl mb-7"
      }
    >
      <div className="flex flex-wrap w-max pb-4 items-center text-sm md:text-lg">
        <img
          src={props.img}
          alt={props.title}
          className="mr-4 p-1 bg-purple-gradient rounded-xl dark:bg-none"
        />
        <h3 className="text-purple">{props.title}</h3>
      </div>

      <div className="flex flex-wrap w-max pb-4">
        {tags.map((tag) => (
          <small key={tag}>#{tag}</small>
        ))}
      </div>

      <p>{props.text}</p>
    </div>
  );
}
