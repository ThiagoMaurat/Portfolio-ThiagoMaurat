import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: static;
  color: white;
  border-bottom: 1.8px solid black;
  width: 100%;
  height: 4rem;
  background-color: white;
`;

export const Logo = styled.div`
  font-size: 1.28rem;
  display: flex;
  align-items: center;
  margin-left: 3.5rem;
  color: #000000;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-right: 3.5rem;

  a {
    text-decoration: none;
    color: #000000;
    font-size: 1.15rem;
    transition: 0.15s ease-in-out;

    &:hover {
      color: #0767dc;
      
    }
  }
`;
