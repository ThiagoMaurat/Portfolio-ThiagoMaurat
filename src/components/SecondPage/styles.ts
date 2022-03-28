import styled from "styled-components";

export const Page = styled.div`
  background-color: #cfe0f2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
`;

export const Knowledges = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000;
    text-align: center;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 1.5rem;
    text-align: justify;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
