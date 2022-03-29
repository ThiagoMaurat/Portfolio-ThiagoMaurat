import Image from 'next/image'
import React from 'react'
import CardGitHub from '../CardRepos/Card'
import * as S from './styles'

export default function Projects() {
  return (
    <S.ProjectsContainer>
        <S.CardImage>
        <CardGitHub username='ThiagoMaurat' reponame='PokePage' />
        </S.CardImage>
    </S.ProjectsContainer>
  )
}
