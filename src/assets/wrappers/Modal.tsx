import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  overflow: auto;
  background-color: ${(props) => props.theme.secondaryBlack};
  animation: ${appear} 0.5s ease-in;

  &.large {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    &.large {
      display: block;
    }
  }
`;

export default Wrapper;
