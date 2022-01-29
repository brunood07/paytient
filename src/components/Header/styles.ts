import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;  

  height: 61px;
  width: 100%;

  background: #fff;
  box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  button {
    border: none;
    background: var(--white);
  }

  svg {
    font-size: 20px;
    color: var(--text);

    transition: filter 0.3s;
    
    &:hover {
      filter: brightness(0.7);
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 36px;
      height: 36px;

      border-radius: 18px;
      margin-left: 32px;

      &:hover {
        border: 1.5px solid var(--green);
      }
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  transition: filter 0.3s;
    
  div.bell-icon {
    margin-left: 39px;
  }

  div.notification-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);
    height: 19px;
    width: 19px;
    border-radius: 100%;
    margin-bottom: 17px;
    margin-left: -9px;
    z-index: 1;
    
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: var(--white);
  }

  svg {
    font-size: 23px;
    color: var(--text);
    opacity: 0.3;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;