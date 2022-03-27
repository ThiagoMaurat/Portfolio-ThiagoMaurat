import styled from "styled-components";

export const main = styled.main`
  background-color: #f1f1f1;
  height: calc(100vh - 4rem);
  display: flex;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledDivNextImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  img {
    transition: all 0.3s ease-in-out;
    &:hover {
      filter: brightness(0.8);
      transform: scale(1.05);
    }
  }
`;

export const LogosSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #0767dc;
  }
`;

export const StyleText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
