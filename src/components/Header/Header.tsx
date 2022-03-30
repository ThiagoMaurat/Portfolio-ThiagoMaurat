import Link from "next/link";
import React from "react";
import * as S from "./styles";

export function Header(): JSX.Element {
  
  return (
    <S.Header>
      <S.Logo>
        <h3>Thiago Maurat🚀💻</h3>
      </S.Logo>
      <S.Content>
        <Link href="#projetos">
          <a>Quem sou eu?</a>
        </Link>
        <Link href="#ThirdPage">
          <a href=".secondPage">Projetos</a>
        </Link>
        <Link href="#conhecimentos">
          <a >Conhecimentos</a>
        </Link>
      </S.Content>
    </S.Header>
  );
}
