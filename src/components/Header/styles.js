import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;

  & {
    background-color: #141414;
  }

  .headerLogo {
    height: 60px;
  }
  .headerLogo img {
    height: 100%;
  }

  .headerUser {
    height: 50px;
  }
  .headerUser img {
    height: 100%;
    border-radius: 5px;
  }
`;

