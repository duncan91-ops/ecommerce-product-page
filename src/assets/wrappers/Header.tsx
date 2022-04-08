import styled from "styled-components";

const Wrapper = styled.header`
  width: 90%;
  max-width: 82rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 3rem;

  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 100%;
  }

  .btn-box {
    position: relative;
  }

  .btn {
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  .logo-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
  }

  .logo {
    transform: translateY(10%);
  }

  .cart-icon path {
    transition: all 0.1s ease-in;
  }

  .cart-btn.active .cart-icon path,
  .cart-btn:hover .cart-icon path {
    fill: ${(props) => props.theme.primaryBlue};
  }

  .quantity {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    width: 20px;
    text-align: center;
    transform: translate(50%, -50%);
    background-color: ${(props) => props.theme.primaryOrange};
  }

  .avatar-box {
    height: 100%;
    border-radius: 100px;
    border: 2px solid transparent;
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      border: 2px solid ${(props) => props.theme.primaryOrange};
    }
  }

  .avatar {
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    height: 10rem;
    border-bottom: 1px solid ${(props) => props.theme.secondaryGrayishBlue};
    margin: 0 auto 10rem;

    .logo-box,
    .avatar-box {
      height: 50%;
    }

    .menu-btn {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
    max-width: 120rem;

    .left,
    .right {
      gap: 3rem;
    }
  }
`;

export default Wrapper;
