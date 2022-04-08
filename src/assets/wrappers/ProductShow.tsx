import styled, { keyframes } from "styled-components";

const increaseVisibility = keyframes`
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .product-btn {
    display: none;
    border: none;
    background-color: transparent;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  .product-btn.active {
    display: block;
    animation: ${increaseVisibility} 1s ease-in;
  }

  .product-img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin-bottom: 0;
  }

  .btn {
    border: none;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn-icon path {
    transition: all 0.3s ease-in;
  }

  .btn:hover .btn-icon path {
    stroke: ${(props) => props.theme.primaryOrange};
  }

  .btn-prev {
    left: 5%;
  }

  .btn-next {
    right: 5%;
  }

  .thumbnails {
    display: none;
  }

  @media screen and (min-width: 600px) {
    .product-btn,
    .product-img {
      border-radius: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 0 5%;
    display: flex;
    flex-direction: column;

    .product-btn {
      margin-bottom: 3rem;
    }

    .product-img {
      margin-bottom: 0;
    }

    .btn-next,
    .btn-prev {
      display: none;
    }

    .thumbnails {
      display: flex;
      justify-content: space-between;
    }

    .thumbnail__btn {
      width: 20%;
      border: 3px solid transparent;
      background-color: transparent;
      border-radius: 15px;
      overflow: hidden;

      &:hover {
        cursor: pointer;

        .thumbnail {
          opacity: 0.5;
        }
      }
    }

    .thumbnail__btn.active {
      border-color: ${(props) => props.theme.primaryOrange};
    }

    .thumbnail__btn.active .thumbnail {
      opacity: 0.5;
    }

    .thumbnail {
      width: 100%;
      display: block;
      transition: all 0.3s ease-in;
    }
  }
`;
export default Wrapper;
