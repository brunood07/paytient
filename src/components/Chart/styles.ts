import styled from "styled-components";

export const ChartContainer = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);
  width: 1100px;
  height: 280px;
  margin-left: 1.5rem;
  margin-top: 1.7rem;

  @media (max-width: 720px) {
    display: none;
  }

  .header {
    display: flex;
    align-items: center;
    margin-left: 0.85rem;
    opacity: 0.61;

    .dollar-sign {
      color: var(--green);
      margin-top: 1rem;
      margin-right: 1rem;
    }

    p {
      margin-top: 1rem;
    }

    .green {
      border-radius: 100%;
      background-color: var(--green);
      margin-left: 45rem;
      margin-right: 0.4rem;
      margin-top: 1rem;
      width: 0.875rem;
      height: 0.875rem;
    }

    .red {
      border-radius: 100%;
      background-color: #F00;
      margin-left: 1rem;
      margin-right: 0.4rem;
      margin-top: 1rem;
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`;