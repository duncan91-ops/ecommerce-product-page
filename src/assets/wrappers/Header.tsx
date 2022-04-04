import styled from "styled-components";

const Wrapper = styled.header`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 100%;
  }

  .btn {
    border: none;
    background-color: transparent;
  }

  .logo-box {
    height: 100%;
  }

  .logo {
    transform: translateY(10%);
  }

  .avatar-box {
    height: 100%;
  }

  .avatar {
    height: 100%;
  }
`;

export default Wrapper;
