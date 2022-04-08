import styled from "styled-components";

const Wrapper = styled.section`
  padding-bottom: 8rem;

  .details {
    width: 90%;
    margin: 0 auto;
  }

  .company {
    color: ${(props) => props.theme.primaryOrange};
    font-weight: 700;
    margin: 2rem 0 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .product {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }

  .description {
    color: ${(props) => props.theme.primaryGrayishBlue};
    line-height: 1.5;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .prices {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .current {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .price {
    font-weight: 700;
    font-size: 3rem;
    /* letter-spacing: 2px; */
  }

  .discount {
    background-color: ${(props) => props.theme.secondaryOrange};
    color: ${(props) => props.theme.primaryOrange};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 5rem;
    height: 2.5rem;
  }

  .former {
    color: ${(props) => props.theme.secondaryGrayishBlue};
    font-weight: 700;
  }

  .amount-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.tertiaryGrayishBlue};
    height: 5.5rem;
    border-radius: 10px;
    padding: 0 2rem;
    margin-bottom: 1.5rem;
  }

  .btn-minus,
  .btn-plus {
    border: none;
    background-color: transparent;
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  .amount {
    font-weight: 700;
  }

  .cart-btn {
    border: none;
    background-color: ${(props) => props.theme.primaryOrange};
    color: ${(props) => props.theme.primaryWhite};
    font-weight: 700;
    width: 100%;
    height: 5.5rem;
    font-size: 1.6rem;
    border-radius: 10px;
    box-shadow: 0 30px 10px ${(props) => props.theme.secondaryOrange};
    transition: all 0.3s ease-in;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  .cart-btn span {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
  }

  .cart-icon {
    path {
      fill: ${(props) => props.theme.primaryWhite};
    }
  }

  @media screen and (min-width: 1024px) {
    display: flex;

    .details {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 5%;
    }

    .company {
      font-size: 1.5rem;
      margin: 0 0 2rem;
    }

    .product {
      font-size: 4.8rem;
    }

    .product,
    .description,
    .prices {
      margin-bottom: 3rem;
    }

    .description {
      font-size: 1.6rem;
    }

    .prices {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .cta {
      display: flex;
      justify-content: space-between;
    }

    .amount-input {
      width: 35%;
    }

    .cart-btn {
      width: 60%;
    }
  }
`;

export default Wrapper;
