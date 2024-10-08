import ContactsForm from "Components/ContactsForm/ContactsForm";
import scss from "./ContactsSection.module.scss";
import SocialsList from "Components/SocialsList/SocialsList";
import Icon from "Components/Icon/Icon";
import svg from "../../../../images/favicon/icons.svg";


const ContactsSection = () => {
  return (
    <section className={`section ${scss.contactsSection} `}>
      <div className={`container md:flex md:justify-between `}>
        <div className="md:w-1/2">
          <h2 className="mb-10">Контакти</h2>
          <h3 className="mb-6">Замовити фотосесію</h3>
          <ContactsForm></ContactsForm>
        </div>
        <div className="mt-52 md:mt-24">
          <ul className={`ml-20 mb-20 sm:ml-32 `}>
            <li>
              <a href="tel:+420722255120">+420722255120</a>
            </li>
            <li>
              <a href="mailto:marynaholovanph@gmail.com">
                marynaholovanph@gmail.com
              </a>
            </li>
          </ul>
          <SocialsList className="ml-20 sm:ml-32"></SocialsList>
          <div className="">
            <Icon
              id={"contacts-bg"}
              width={50}
              style={{fill:"#f7f2ef"}}
            ></Icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
