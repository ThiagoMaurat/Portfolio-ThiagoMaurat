import Image from "next/image";
import React from "react";
import ImageComida from "../../assets/images/ComidasTipicas.png";
import ImageDOM from "../../assets/images/ManipulandoDOM.png";
import Images from "../../assets/images/PokePage.png";
import ImageNLW from "../../assets/images/LetMeAsk.png";
import ImageBlog from "../../assets/images/Blog.png";
import * as S from "./styles";

export default function ThirdPage() {
  return (
    <>
      <S.ProjectsTitle>Projetos</S.ProjectsTitle>
      <S.ProjectsContainer>
        <S.ProjectsDiv>
          <S.Projects>
            <a href="https://poke-page-6yarqotbx-thiagomaurat.vercel.app/">
              <h3>PokePage</h3>
              <p>Página que lista os Pokemons pela PokeAPI</p>
              <Image
                src={Images}
                width={300}
                height={300}
                alt="Página PokePage"
              ></Image>
            </a>
          </S.Projects>
          <S.Projects>
            <a href="https://guichehade.github.io/comidastipicas/">
              <h3>Comidas Típicas</h3>
              <p>Página de comidas típicas criada em grupo</p>
              <Image
                src={ImageComida}
                width={300}
                height={300}
                alt="Páginas comidas típicas"
              ></Image>
            </a>
          </S.Projects>
          <S.Projects>
            <a href="https://thiagomaurat.github.io/Checkpoint_Front//">
              <h3>Manipulando DOM</h3>
              <p>Manipulação do DOM feito em grupo</p>
              <Image
                src={ImageDOM}
                width={300}
                height={300}
                alt="página manipulando DOM"
              ></Image>
            </a>
          </S.Projects>
          <S.Projects>
            <a href="https://github.com/ThiagoMaurat/NLW---Room-firebase">
              <h3>NLWRoom Firebase</h3>
              <p>Implementação Firebase projeto NLW</p>
              <Image
                src={ImageNLW}
                width={300}
                height={300}
                alt="Thiago Maurat Image"
              ></Image>
            </a>
          </S.Projects>
          <S.Projects>
            <a href="https://github.com/ThiagoMaurat/Desafio3-ReactIgnite-BlogCMS">
              <h3>RockeatBlogCMS</h3>
              <p>Desenvolvimento blog CMS com React</p>
              <Image
                src={ImageBlog}
                width={300}
                height={300}
                alt="Thiago Maurat Image"
              ></Image>
            </a>
          </S.Projects>
        </S.ProjectsDiv>
      </S.ProjectsContainer>
    </>
  );
}
