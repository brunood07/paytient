import styled from "styled-components";

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 4.5rem;
  margin-top: 7rem;
  margin-left: 1.5rem;
  font-family: "Roboto", sans-serif;

  h1 {
    font-size: 1.5rem;
    margin-top: -29.5rem;
    margin-right: 55.5rem;
  }

  p {
    font-size: 0.75rem;
  }

  .filter {
    font-size: 0.75rem;
    margin-top: -29.5rem;
    opacity: 0.5;
  }

  button {
    background-color: var(--white);
    border-radius: 15px;
    border: 0;
    box-shadow: 10px 15px 30px 0 rgba(35, 38, 90, 0.06);
    width: 5.5rem;
    height: 1.875rem;
    margin-top: -29.5rem;
    margin-left: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }

   .filterIcon {
     margin-right: 0.5rem;
     color: var(--green);
   }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 0 1.5rem;
  width: 100%;
  margin-top: -16.5rem;

  .cardContainer {
    width: 18rem;
    height: 14rem;
    padding: 1.25rem 1.125rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Inter", sans-serif;
    
    border-radius: 15px;
    box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);
    
    background: #fff;

    .header {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 600;
      opacity: 0.61;
      margin-left: -10rem;

        svg {
          font-size: 1rem;
          margin-right: 5px;
          margin-left: 1rem;
        }

        .shopping-cart {
          color: var(--blue);
          margin-left: -0.625rem;
        }

        .dollar-sign {
          color: var(--green)
        }

        .exchange-alt {
          color: var(--yellow);
        }

        .user {
          color: var(--purple);
          margin-left: -0.625rem;
        }
    }

    .value {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -1.46px;
      text-align: center;
      opacity: 0.6;

        span {
          font-size: 1rem;
          font-weight: 800;
          margin-right: 0.25rem;
        }
    }

    .footer {
      display: flex;
      align-self: center;

      p {
        font-size: 1rem;
        font-weight: 600;
        opacity: 0.53;
      }

      svg {
          font-size: 1.5rem;
          margin-right: 1px;
      }

      .sort-up {
        position: relative;
        top: 5px;
        color: var(--green);
      }

      .sort-down {
        position: relative;
        bottom: 5px;
        color: #F00;
      }
    }
  }
`;