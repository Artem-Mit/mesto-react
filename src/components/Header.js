import mainLogo from "../images/logo_header.svg";

function Header() {
  return (
    <header className="header">
      <img src={mainLogo} alt="Логотип Место" className="header__logo" />
    </header>
  );
}

export default Header;
