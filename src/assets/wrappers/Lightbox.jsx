import styled from "styled-components";

const Wrapper = styled.div`
  width: 40%;
  max-width: 57.6rem;
  margin: 7rem auto 0;
  gap: 3rem;

  .btn-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  .btn-close {
    border: none;
    background-color: transparent;
    padding: 5px;
  }

  .btn-close:hover {
    cursor: pointer;

    .icon-close path {
      fill: ${(props) => props.theme.primaryOrange};
    }
  }

  .icon-close path {
    fill: #fff;
    transition: all 0.3s ease-in;
  }

  .lightbox {
    margin: 0;
  }

  .product-btn.active {
    animation: none;
  }

  .btn {
    top: 37%;
    width: 6rem;
    height: 6rem;
  }

  .btn-next,
  .btn-prev {
    display: block;
  }

  .btn-next {
    right: 0;
    transform: translateX(50%);
  }

  .btn-prev {
    left: 0;
    transform: translateX(-50%);
  }

  .thumbnails {
    width: 80%;
    margin: 0 auto;
  }
`;

export default Wrapper;
