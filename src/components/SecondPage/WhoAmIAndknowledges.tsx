import * as S from "./styles";
import {Html5} from "@styled-icons/boxicons-logos/Html5";
import {Css3} from "@styled-icons/boxicons-logos/Css3";
import { Javascript } from "styled-icons/boxicons-logos";
import {ReactLogo} from "@styled-icons/boxicons-logos/ReactLogo";
import {Nodejs} from "@styled-icons/boxicons-logos/Nodejs";
import {Typescript} from "@styled-icons/simple-icons/Typescript";
import {Styledcomponents} from "@styled-icons/simple-icons/Styledcomponents";
import { Express } from "styled-icons/simple-icons";
import { Mysql } from "styled-icons/simple-icons";
import {Nextdotjs} from "@styled-icons/simple-icons/Nextdotjs";



export const WhoAmIAndknowledges = () => {
return (
    <S.Page>
        <S.WhoAmI>
            <h3>Quem sou eu?</h3>
            <p>
                Meu nome é Thiago Maurat, tenho 26 anos.
                Atualmente estou cursando o curso de Desenvolvedor Full-Stack pela Digital House, bem como ReactJS e NodeJS na RockeatSeat.
                Apesar de clichê, sou apaixonado por tecnologia e programação e tenho prazer em aprender e desenvolver.
            </p>
            <h3>Quais tecnologias estou aprendendo no momento?</h3>
            <p>
                Atualmente sigo no treinamento em ReactJS, NodeJS, TypeScript, Styled-Components, ExpressJS, MySQL e NextJS.
            </p>
            <h3>O que faço além da programação?</h3>
            <p>
            Sou uma pessoa totalmente ativa e dedicada, sempre estou em busca de novas experiências para me aperfeiçoar e me tornar mais produtivo.
            Gosto de praticar esportes, assistir séries, filmes, e beber café até o término do dia. 
            </p>
        </S.WhoAmI>
        <S.Knowledges>
            <h3>Conhecimentos</h3>
            <ul>
                <li>HTML5 <Html5 size={50} color="orange"/></li>
                <li>CSS3 <Css3 size={50} color="blue" /></li>
                <li>Javascript <Javascript size={50} color="red" /></li>
                <li>ReactJS <ReactLogo size={50} color="green" /></li>
                <li>NodeJS <Nodejs size={50} color="purple" /></li>
                <li>TypeScript <Typescript size={50} color="yellow" /></li>
                <li>Styled-Components <Styledcomponents size={50} color="pink" /></li>
                <li>ExpressJS <Express size={50} color="orange" /></li>
                <li>MySQL <Mysql size={50} color="blue" /></li>
                <li>NextJS <Nextdotjs size={50} color="red" /></li>                
            </ul>
        </S.Knowledges>
    </S.Page>
);
}