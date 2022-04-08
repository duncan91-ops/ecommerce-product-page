import styled from "styled-components";

const Wrapper = styled.nav`
  display: none;
  height: 100%;

  &.modal-open {
    display: block;
    background-color: ${(props) => props.theme.primaryWhite};
    width: 65%;
    padding: 2rem;
  }

  &.modal-open .close-btn {
    display: inline-block;
    margin-bottom: 4rem;
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  &.modal-open .items {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &.modal-open .item {
    height: auto;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &.modal-open .link {
    &:link,
    &:visited {
      text-decoration: none;
      color: ${(props) => props.theme.primaryBlue};
      font-weight: 700;
    }

    &:hover {
      color: ${(props) => props.theme.primaryGrayishBlue};
    }
  }

  @media screen and (min-width: 768px) {
    &.modal-open {
      display: none;
    }

    .close-btn {
      display: none;
    }

    .items {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      height: 100%;
    }

    .item {
      height: 100%;
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    .link {
      display: flex;
      align-items: center;
      height: 100%;
      border-bottom: 2px solid transparent;

      &:link,
      &:visited {
        text-decoration: none;
        color: ${(props) => props.theme.primaryGrayishBlue};
      }

      &:hover {
        font-weight: 700;
        border-bottom: 2px solid ${(props) => props.theme.primaryOrange};
      }
    }

    display: block;
  }
`;

export default Wrapper;
