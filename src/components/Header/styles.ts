import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;  

  height: 4rem;
  width: 100%;

  background: #fff;
  box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);

  .img {
    width: 12.5rem;
    height: 4rem;
    margin-right: 4rem;
    margin-left: 2rem;
    margin-top: 0.75rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;

  button {
    border: none;
    background: var(--white);
  }

  svg {
    font-size: 1.25rem;
    color: var(--text);
    margin-left: -5rem;
    opacity: 0.24;

    transition: filter 0.3s;
    
    &:hover {
      filter: brightness(0.7);
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 2.25rem;
      height: 2.25rem;

      border-radius: 1.125rem;
      margin-left: 2rem;

      &:hover {
        border: 2px solid var(--green);
      }
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.3125rem;
  margin-right: -3.125rem;

  transition: filter 0.3s;
    
  div.bell-icon {
    margin-left: 3.125rem;
  }

  div.notification-circle {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--green);
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 100%;
    margin-bottom: 1rem;
    margin-left: -0.6rem;
    z-index: 1;
    
    font-family: "Raleway", sans-serif;
    font-size: 0.75rem;
    font-weight: bold;
    color: var(--white);
  }

  svg {
    font-size: 1.5rem;
    color: var(--text);
    opacity: 0.3;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;