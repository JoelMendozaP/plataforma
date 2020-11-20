import "./style/Header.css";
import { Search } from "../../inputs";
import HeaderOptions from "./HeaderOptions";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("header");
  return (
    <div className="itemnav navlist">
      <div className="navlist__title">
        <h1>{t("welcomeHead")}</h1>
      </div>
      <div className="navlist__search">
        <Search />
      </div>
      <div className="navlist__options">
        <HeaderOptions />
      </div>
    </div>
  );
};

export default Header;
