import ContactsForm from "Components/ContactsForm/ContactsForm";
import scss from "./ContactsSection.module.scss";
import SocialsList from "Components/SocialsList/SocialsList";
import Icon from "Components/Icon/Icon";
import svg from "../../../../images/favicon/icons.svg";

const ContactsSection = () => {
  return (
    <section
      className={`section relative ${scss.contactsSection} pb-20 xlg:pb-48 xlg:pt-28`}
    >
      <div className={`container md:flex md:justify-between`}>
        <div className="md:w-1/2">
          <h2 className="mb-10 md:mb-20">Контакти</h2>
          <h3 className="mb-6 md:mb-8">Замовити фотосесію</h3>
          <ContactsForm></ContactsForm>
        </div>
        <div className="mt-52 md:mt-24 xlg:mt-28">
          <ul className={`ml-20 mb-20 sm:ml-32 lg:ml-0 xlg:pr-28`}>
            <li>
              <a href="tel:+420722255120" className="font-bold">
                +420722255120
              </a>
            </li>
            <li>
              <a href="mailto:marynaholovanph@gmail.com" className="font-bold">
                marynaholovanph@gmail.com
              </a>
            </li>
          </ul>
          <SocialsList className="ml-20 font-bold sm:ml-32 lg:ml-0 xlg:pr-28"></SocialsList>
          <div
            className={`${scss.sectionBg} absolute -z-50 -right-14 bottom-24 md:bottom-1/3 lg:bottom-12 xlg:bottom-0 xlg:-right-7`}
          >
            <Icon
              id={"contacts-bg"}
              style={{ fill: "#f7f2ef", width: "100%", height: "100%" }}
            ></Icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
