import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 15rem;
  height: 42rem;
  box-shadow: 20px 25px 40px 0 rgba(35, 38, 90, 0.06);
  font-family: "Inter", sans-serif;

  a { 
    text-decoration: none;
    color: var(--text);
  }

  nav {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
    
    transition: filter 0.3s;

    ul {
      margin-left: 1.25rem;
      
      li {
        display: flex;
        align-items: center;
        
        list-style: none;
        font-size: 0.875rem;
        font-weight: 600;
        margin-top: 1.8rem;
        
        opacity: 0.25;
        
        &:hover {
          filter: brightness(0.7);
        }
        
        &:first-child {
          opacity: 1;
        }

        &:last-child {
          margin-top: 17rem;
        }
        
        svg {
          width: 1rem;
          height: 1rem;
          
          margin-right: 1.25rem;
        }
      }
    }
  }
`;