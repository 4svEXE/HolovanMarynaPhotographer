import { nanoid } from "@reduxjs/toolkit";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import scss from "./ContactsForm.module.scss";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().max(100, "Too long"),
});

export default function ContactsForm() {
  const idForEmail = nanoid();
  const idForPhone = nanoid();
  const idForName = nanoid();
  const idForMessage = nanoid();

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={contactSchema}
        >
          <Form className="flex flex-col gap-10">
            <label htmlFor={idForName}>
              <Field
                className={`bg-transparent border-b-slate-500 border-b-2 w-full outline-none`}
                as="input"
                name="name"
                id={idForName}
                placeholder={"Імя"}
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
                id={idForPhone}
                placeholder={"Телефон"}
              />
              <ErrorMessage
                className={scss.error}
                name="phone"
                component={"span"}
              />
            </label>
            <label htmlFor={idForEmail}>
              <Field
                className={`bg-transparent border-b-slate-500 border-b-2 w-full outline-none`}
                as="input"
                type="email"
                name="email"
                id={idForEmail}
                placeholder={"Email"}
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
                placeholder={"Повідомлення"}
              />
              <ErrorMessage
                className={scss.error}
                name="message"
                component={"span"}
              />
            </label>

            <button type="submit" className={`${scss.submitBtn} bg-black p-3 text-white w-28`}>Надіслати</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
