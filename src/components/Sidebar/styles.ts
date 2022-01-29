import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 223px;
  height: 825px;
  box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);

  img {
    width: 125px;
    height: 51px;
    margin-right: 51px;
    margin-left: 42px;
    margin-top: 12px;
  }

  a { 
    text-decoration: none;
  }

  nav {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    
    transition: filter 0.3s;

    ul {
      margin-top: 24px;
      margin-left: 32px;
      
      li {
        display: flex;
        align-items: center;
        
        list-style: none;
        font-size: 14px;
        font-weight: 600;
        margin-top: 22px;
        
        opacity: 0.25;
        
        &:hover {
          filter: brightness(0.7);
        }
        
        &:first-child {
          opacity: 1;
        }

        &:last-child {
          margin-top: 230px;
        }
        
        svg {
          width: 16px;
          height: 16px;
          
          margin-right: 20px;
        }
      }
    }
  }
`;