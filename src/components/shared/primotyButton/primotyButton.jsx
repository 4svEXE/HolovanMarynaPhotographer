import React from "react";
import "./primotyButton.scss";

/**
 * This function creates Primoty Button Component
 * @param {text} string 
 * @param {url} string 
 * @param {active} string // 'active' or '' 
 * 
 * @returns {PrimotyButton} component
 */
function PrimotyButton(props) {
  const { text = "IM BUTTON", url = "#", active = "" } = props;

  return (
    <a className={"text-white primotyButton z-5 " + active} href={url}>
      {text}
    </a>
  );
}

export default PrimotyButton;
