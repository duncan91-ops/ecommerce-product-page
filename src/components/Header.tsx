import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import Nav from "./Nav";
import Cart from "./Cart";
import Modal from "./Modal";
import Wrapper from "../assets/wrappers/Header";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
// import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

const Header = () => {
  const { state } = useGlobalContext();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeCart);

    return () => {
      window.removeEventListener("click", closeCart);
    };
  });

  return (
    <Wrapper>
      <div className="left">
        <button onClick={() => setModalOpen(true)} className="btn menu-btn">
          <img src={menuIcon} alt="menu icon" className="menu-icon" />
        </button>
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Nav />
        <Modal open={modalOpen} closeModal={closeModal}>
          <Nav modalOpen={modalOpen} closeMenu={closeModal} />
        </Modal>
      </div>
      <div onClick={(e) => e.stopPropagation()} className="right">
        <div className="btn-box">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className={`btn cart-btn ${cartOpen && "active"}`}
          >
            {/* <img src={cartIcon} alt="cart icon" className="cart-icon" /> */}
            <svg
              className="cart-icon"
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          {state.cart > 0 && <p className="quantity">{state.cart}</p>}
          {cartOpen && <Cart closeCart={closeCart} />}
        </div>
        <div className="avatar-box">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
