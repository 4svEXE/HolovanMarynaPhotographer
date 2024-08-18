import { useState } from "react";
import Button from "./button";
import "./ButtonToUp.css";

export default function ButtonToUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="button-to-up">
      <Button
        onClick={scrollToTop}
        title="🡱"
        className={
          "primotyButton active rounded-xl " +
          (visible ? "inline" : "hidden-btn")
        }
      />
    </div>
  );
}
