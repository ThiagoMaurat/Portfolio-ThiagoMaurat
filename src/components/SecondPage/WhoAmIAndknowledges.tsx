import * as S from "./styles";

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
            Gosto de praticar esportes, assistir séries e filmes, e beber café até o término do dia. 
            </p>
        </S.WhoAmI>
        <S.Knowledges>
            <h3>Conhecimentos</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>TypeScript</li>
                <li>Styled-Components</li>
                <li>ExpressJS</li>
                <li>MySQL</li>
                <li>NextJS</li>
            </ul>
        </S.Knowledges>
    </S.Page>
);
}