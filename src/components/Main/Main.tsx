import Image from "next/image";
import React from "react";
import {Instagram} from '@styled-icons/bootstrap/Instagram'
import {Github} from '@styled-icons/boxicons-logos/Github'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import {Twitter} from '@styled-icons/boxicons-logos/Twitter'
import {Facebook} from '@styled-icons/boxicons-logos/Facebook'
import {Youtube} from '@styled-icons/boxicons-logos/Youtube'
import {Email} from '@styled-icons/entypo/Email'

import img from "../../assets/images/oie_jpg.png";
import * as S from "./styles";

export function Main(): JSX.Element {
  return (
    <S.main>
      <S.Content>
        <S.StyleText>
        <h1>Thiago Maurat</h1>
        <h2>Desenvolvedor Front-End</h2>
        </S.StyleText>
      <S.LogosSocialMedia>
      <a href="https://www.instagram.com/thiago_mmd/"><Instagram size={50} /></a> 
      <a href="https://github.com/ThiagoMaurat"><Github size={50} /></a> 
      <a href="https://www.facebook.com/thiago.maurat"><Facebook size={50} /></a> 
      <a href="https://www.linkedin.com/in/thiago-maurat-477a041b9/"><Linkedin size={50} /></a> 
      <a href="https://twitter.com/Thiago_Maurat"><Twitter size={50} /></a> 
      <a href="https://www.youtube.com/channel/UC3Gh_B370K2BKyP2o1pDYfw"><Youtube size={50} /></a>
      <a href="https://outlook.live.com/thiagomaurat@hotmail.com"><Email size={50} /></a>
      </S.LogosSocialMedia>
      </S.Content>
      <S.StyledDivNextImage>
        <Image alt="Thiago Maurat Image" src={img} width={400} height={400} />
      </S.StyledDivNextImage>
    </S.main>
  );
}
