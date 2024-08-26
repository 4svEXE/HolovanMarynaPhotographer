import LocalizationList from "Components/LocalizationList/LocalizationList";
import MobileMenuNav from "Components/MobileMenuNav/MobileMenuNav";
import SocialsList from "Components/SocialsList/SocialsList";
import Icon from "Components/Icon/Icon";
import css from "./MobileMenu.module.scss";

const MobileMenu = ({ closeModal, modalIsOpen }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className={`${css.mobileMenu} ${modalIsOpen ? css.isOpen : ""}`}>
      <div className={`flex flex-col`}>
        <button className={css.closeBtn} onClick={() => handleCloseModal()}>
          <Icon
            id={"close"}
            width={14}
            height={14}
            style={{ fill: "#000000" }}
          />
        </button>
        <LocalizationList style={"flex gap-4 mb-32"} />
        <MobileMenuNav></MobileMenuNav>
        <SocialsList />
      </div>
    </div>
  );
};

export default MobileMenu;
