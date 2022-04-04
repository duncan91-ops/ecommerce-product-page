import Wrapper from "../assets/wrappers/Header";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

const Header = () => {
  return (
    <Wrapper>
      <div className="left">
        <button className="btn menu-btn">
          <img src={menuIcon} alt="menu icon" className="menu-icon" />
        </button>
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
      <div className="right">
        <button className="btn cart-btn">
          <img src={cartIcon} alt="cart icon" className="cart-icon" />
        </button>
        <div className="avatar-box">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
