import { nanoid } from "@reduxjs/toolkit";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import scss from "./ContactsForm.module.scss";
import { options } from "constants";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Занадто коротко")
    .max(50, "Занадто довго")
    .required("Обов'язкове поле"),
  phone: Yup.string()
    .min(9, "Занадто коротко")
    .max(11, "Занадто довго")
    .required("Обов'язкове поле"),
  email: Yup.string().email("Невалідний email").required("Обов'язкове поле"),
  message: Yup.string().max(100, "Занадто довго"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactsForm() {
  const {t} = useTranslation();
  emailjs.init(options);
  const form = useRef();

  const idForEmail = nanoid();
  const idForPhone = nanoid();
  const idForName = nanoid();
  const idForMessage = nanoid();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();

    try {
      emailjs.sendForm(
        "contact_service",
        "contact_form",
        form.current,
        options
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`${scss.formContainer}`}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={contactSchema}
        >
          <Form
            innerRef={form}
            className={`${scss.form} flex flex-col gap-10 mb-10`}
          >
            <div
              className={`${scss.fieldsContainer} flex flex-col gap-10 xlg:flex-row xlg:justify-between`}
            >
              <label htmlFor={idForName}>
                <Field
                  className={`bg-transparent border-b-slate-500 border-b-2 w-full outline-none`}
                  as="input"
                  name="name"
                  id={idForName}
                  placeholder={`${t("homepage.Contacts.Form.NameField")}`}
                  autoComplete={"off"}
                />
                <ErrorMessage
                  className={scss.error}
                  name="name"
                  component={"span"}
                />
              </label>
              <label htmlFor={idForPhone}>
                <Field
                  className={`bg-transparent border-b-slate-500 border-b-2 w-full outline-none`}
                  as="input"
                  type="number"
                  name="phone"
                  step={"any"}
                  inputMode="numeric"
                  min="0"
                  id={idForPhone}
                  placeholder={`${t("homepage.Contacts.Form.PhoneField")}`}
                  autoComplete={"off"}
                />
                <ErrorMessage
                  className={scss.error}
                  name="phone"
                  component={"span"}
                />
              </label>
            </div>
            <label htmlFor={idForEmail}>
              <Field
                className={`bg-transparent border-b-slate-500 border-b-2 w-full outline-none`}
                as="input"
                type="email"
                name="email"
                id={idForEmail}
                placeholder={`${t("homepage.Contacts.Form.EmailField")}`}
                autoComplete={"off"}
              />
              <ErrorMessage
                className={scss.error}
                name="email"
                component={"span"}
              />
            </label>
            <label htmlFor={idForMessage}>
              <Field
                className={`bg-transparent border-b-slate-500 border-b-2 w-full outline-none`}
                as="input"
                name="message"
                id={idForMessage}
                placeholder={`${t("homepage.Contacts.Form.MessageField")}`}
                autoComplete={"off"}
              />
              <ErrorMessage
                className={scss.error}
                name="message"
                component={"span"}
              />
            </label>
            <button
              id="submitContactFormBtn"
              type={"submit"}
              className={`${scss.submitBtn} bg-black p-3 text-white w-28 mx-auto md:mr-0`}
            >
              {`${t("homepage.Contacts.Form.SendBtn")}`}
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
