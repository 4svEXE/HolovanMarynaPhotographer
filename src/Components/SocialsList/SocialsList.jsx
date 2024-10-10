import Icon from "Components/Icon/Icon";
import PropTypes from 'prop-types';


const SocialsList = ({className}) => {
    return <ul className={`flex flex-col gap-6 ${className || ""}`}>
        <li className="flex items-center gap-3"><a href=""><Icon id={"instagram"} width={22} height={22} /></a>Instagram</li>
        <li className="flex items-center gap-3"><a href=""><Icon id={"telegram"} width={22} height={22}/></a>Telegram</li>
        <li className="flex items-center gap-3"><a href=""><Icon id={"facebook"} width={22} height={22}/></a>Facebook</li>
    </ul>
};

SocialsList.propTypes = {
    className: PropTypes.string
  }
  
export default SocialsList;

