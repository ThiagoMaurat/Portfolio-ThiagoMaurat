import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;

  @media (max-width: 1460px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
  background-color: #f1f1f1;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 30px;

  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.4rem;

    font-weight: bold;
    color: #000000;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #000000;

    &:hover {
      color: #00a8ff;
    }
  }
`;

export const ProjectsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  height: 80%;
  gap: 3rem;
`;
