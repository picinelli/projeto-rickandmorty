<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/picinelli/projeto-rickandmorty">
    <img src="https://ovicio.com.br/wp-content/uploads/2019/07/20190716-cropped-20190716-rick-e-morty.jpg" alt="Logo" width="250">
  </a>

<h3 align="center">[Suflex] Desafio Rick and Morty - Full Stack</h3>
  <h4 align="center"> 
	🚀 Concluído! 🚀
  </h4>
  <p align="center">
    Aplicação full-stack destinada à favoritar personagens do desenho Rick and Morty
    <br />
</div>

## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Tecnologias Utilizadas](#tecnologias)
- [Contato](#contato)

## Introdução

Neste desafio, deve ser criado uma SPA que vai consumir a [The Rick and Morty API], Este desafio consiste em uma listagem de personagens do Rick e Morty , exibindo os detalhes sobre cada personagem.

Ao efetuar login uma opção de favoritar personagem é disponibilizada, e todos os personagems favoritados são salvos no banco da aplicação. E listado em uma pagina de favoritos também disponível apenas após login.

Requisitos: 

Deslogado:
- Lista dos personagens com seus respectivos nomes e fotos.
- Busca por personagens (Nome)
- Filtro que permita listar todos, só humanos ou só aliens
- Os filtros devem funcionar sozinhos ou combinados
- Ao clicar no personagem, permitir a visualização detalhada com pelo menos: Nome, status, specie, quantidade de episódios e data de criação
- Usuário deve ser capaz de criar uma conta na aplicação
- Usuário deve ser capaz de logar com a conta criada

Logado
- Todas as funcionalidade de Deslogado, exceto criar usuário e logar
- Usuário deve ser capaz de deslogar da aplicação
- Permitir criar uma lista de favoritos e adicionar/remover personagens nela
- Persistir a lista favoritada em banco para futuros logins


## Instalação

```
FRONT-END:
- execute: npm i
- crie um arquivo .env (dados no .env.example)
- execute: npm start

------------------------

BACK-END:
- execute: npm i
- crie um arquivo .env (dados no .env.example)
- execute: npm run prisma:migrate
- execute: npm run dev

------------------------

Testes:
Na pasta back-end
- crie um arquivo .env.test (dados no .env.test.example)
- execute: npm run test

------------------------

Se você quiser rodar a aplicação através do Docker, faça o seguinte:
Na pasta do back-end, crie um arquivo .env.dev (dados no .env.dev.example)
e então, na mesma pasta, execute npm run dev:compose 

após a instalação das imagens, e funcionamento do container, você poderá acessar o site na url abaixo:
http://localhost:8080/


```



## Tecnologias
 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<!-- CONTACT -->

## Contato

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Mail][mail-shield]][mail-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/pedro-ivo-brum-cinelli//
[mail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[mail-url]: mailto:cinelli.dev@gmail.com
