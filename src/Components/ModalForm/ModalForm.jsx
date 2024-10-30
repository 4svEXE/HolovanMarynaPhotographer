import { nanoid } from "@reduxjs/toolkit";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import scss from "./ModalForm.module.scss";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Занадто коротко")
    .max(50, "Занадто довго")
    .required("Обов'язкове поле"),
  phone: Yup.string()
    .min(9, "Занадто коротко")
    .max(11, "Занадто довго")
    .required("Обов'язкове поле"),
  email: Yup.string().email("Невалідний email"),
  message: Yup.string().max(100, "Занадто довго"),
});

export default function ModalForm({ modalIsOpen, closeModal }) {
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
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <div className={`${scss.formContainer}`}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={contactSchema}
        >
          <Form className={`${scss.form} flex flex-col gap-10 mb-10`}>
            <label htmlFor={idForName}>
              Ім&apos;я*
              <Field
                className={`bg-slate-50 px-4 py-2 w-full outline-none`}
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
              Телефон*
              <Field
                className={`bg-slate-50 px-4 py-1 w-full outline-none`}
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
              Email
              <Field
                className={`bg-slate-50 px-4 py-1 w-full outline-none`}
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
              Повідомлення
              <Field
                className={`${scss.messageInput} bg-slate-50 px-4 py-1 w-full outline-none h-28`}
                as="textarea"
                type={"text"}
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
            <button
              id="submitContactFormBtn"
              type={"submit"}
              className={`${scss.submitBtn} bg-black p-3 text-white w-full md:mr-0`}
            >
              Надіслати
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
