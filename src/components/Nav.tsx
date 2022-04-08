import Wrapper from "../assets/wrappers/Nav";
import iconClose from "../assets/images/icon-close.svg";

const Nav = ({
  modalOpen,
  closeMenu,
}: {
  modalOpen?: boolean;
  closeMenu?: () => void;
}) => {
  return (
    <Wrapper
      onClick={(e) => e.stopPropagation()}
      className={`${modalOpen && "modal-open"}`}
    >
      <button onClick={closeMenu} className="close-btn">
        <img src={iconClose} alt="close menu" className="icon-close" />
      </button>
      <ul className="items">
        <li className="item">
          <a href="/" className="link">
            Collections
          </a>
        </li>
        <li className="item">
          <a href="/" className="link">
            Men
          </a>
        </li>
        <li className="item">
          <a href="/" className="link">
            Women
          </a>
        </li>
        <li className="item">
          <a href="/" className="link">
            About
          </a>
        </li>
        <li className="item">
          <a href="/" className="link">
            Contact
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
