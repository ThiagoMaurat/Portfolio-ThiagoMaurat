import styled from "styled-components";

export const Page = styled.div`
  background-color: #cfe0f2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 830px) {
    flex-direction: column;
    height: auto;
    
  }
`;

export const WhoAmI = styled.div`
  display: flex;
  flex-direction: column;
  width: 446px;
  text-align: justify;
  line-height: 1.3;
  font-size: 1.3rem;

  h3 {
    font-size: 1.35rem;
    font-weight: bold;
    color: #000000;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Knowledges = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media (max-width: 830px) {
    margin-top: 1.8rem;
    
  }

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #000000;
    text-align: center;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 1.4rem;
    text-align: justify;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
