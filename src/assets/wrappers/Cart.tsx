import styled from "styled-components";

const Wrapper = styled.article`
  background-color: #fff;
  width: 36rem;
  max-width: 40rem;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(16%, 25%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  z-index: 2;

  .title {
    padding: 2rem;
    font-size: 1.6rem;
    border-bottom: 1px solid ${(props) => props.theme.secondaryGrayishBlue};
  }

  .content {
    padding: 2rem;
    min-height: 17rem;
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }

  .details {
    width: 100%;
  }

  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .left {
    display: flex;
  }

  .item__thumbnail-box {
    width: 5rem;
    height: 5rem;
    border-radius: 5px;
    overflow: hidden;
  }

  .item__thumbnail {
    width: 100%;
  }

  .item__name,
  .item__price {
    color: ${(props) => props.theme.primaryGrayishBlue};
  }

  .item__price-total {
    color: ${(props) => props.theme.primaryBlue};
    font-weight: 700;
  }

  .delete,
  .checkout {
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  .checkout {
    width: 100%;
    background-color: ${(props) => props.theme.primaryOrange};
    height: 5rem;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;

    &:hover {
      opacity: 0.5;
    }
  }

  .empty {
    color: ${(props) => props.theme.primaryGrayishBlue};
    font-weight: 700;
    transform: translateY(40%);
  }

  @media screen and (min-width: 768px) {
    transform: translate(16%, 20%);
  }
`;
export default Wrapper;
