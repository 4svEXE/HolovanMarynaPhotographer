import Icon from "Components/Icon/Icon";

const SocialsList = () => {
    return <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-3"><a href=""><Icon id={"instagram"} width={22} height={22} /></a>Instagram</li>
        <li className="flex items-center gap-3"><a href=""><Icon id={"telegram"} width={22} height={22}/></a>Telegram</li>
        <li className="flex items-center gap-3"><a href=""><Icon id={"facebook"} width={22} height={22}/></a>Facebook</li>
    </ul>
};

export default SocialsList;