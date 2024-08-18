import React, { useState } from "react";
import style from "./ContactForm.module.scss";
import { useTranslation } from "react-i18next";

import mail from "/img/footer/mail.svg";
import copy from "/img/footer/copy.svg";
import chat from "/img/footer/chat.svg";

export default function ContactForm() {
  const [state, setState] = useState({ copied: "" });
  const { t } = useTranslation();

  const textForCopy = "sales@cowchain.io";

  //copy text to clipboard
  const copyToClipboard = (event, copy = textForCopy) => {
    const el = document.createElement("textarea");
    el.value = copy;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");

    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }

    setState({ copied: t([`homepage.Footer.Copied`]) });

    setTimeout(() => {
      setState({ copied: "" });
    }, 2000);
  };

  return (
    <div
      className={
        style.form +
        " md:w-100 flex flex-col bg-purple-900 md:items-start items-center"
      }
    >
      <h4>{t([`homepage.Footer.ContactUs`])}</h4>

      <div className="flex pt-8">
        <img src={mail} alt="mail icon" />
        <span>sales@test.io</span>
        <img
          src={copy}
          alt="copy text icon"
          onClick={copyToClipboard}
          className="ml-2 opacity-70 cursor-pointer"
        />
        <span>{state.copied}</span>
      </div>

      <div className="flex py-5">
        <img src={chat} alt="chat icon" />
        <span>{t([`homepage.Footer.ChatUsOnBlockchain`])}</span>
      </div>

      <form
        action=""
        method="post"
        className="flex flex-wrap rounded-lg overflow-hidden"
      >
        <input
          type="text"
          name="user_contact"
          placeholder="E-mail or Phone"
          className="my-2 md:w-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="submit"
          name="send_user"
          value="Send Request"
          className="my-2 duration-300 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
}
