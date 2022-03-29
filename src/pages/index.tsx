import type { NextPage } from "next";
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";
import { WhoAmIAndknowledges } from "../components/SecondPage/WhoAmIAndknowledges";
import Projects from "../components/Projects/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main/>
      <WhoAmIAndknowledges/>
      <Projects />
    </>
  );
};

export default Home;
