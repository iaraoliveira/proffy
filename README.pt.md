<div align="right" >
    <a href="./README.md">
    <img src="./.github/lg-button-en.png" alt="Read this in English" width="180px" ></img>
  </a>
</div>
<br/>

<div align="center">
 <img src="./.github/logo.png" alt="Proffy" />
</div>

<br/>
<p align="center">
 <a href="#sobre">Objetivo</a>  • 
 <a href="#tecnologias">Tecnologias</a>  •  
 <a href="#pre-requisitos">Pré-requisitos</a>  • 
 <a href="#licenc-a">Licença</a>  •  
 <a href="#autor">Autor</a>
</p>


<br/>
<p><strong>ATENÇÃO:</strong> A implementação deste projeto está em andamento.</p>
<br/>

<a name="sobre"/>

## :bulb: Sobre o projeto

<br/>

<div align="center">
  <img src="./.github/capa.png" alt="Project cover" width="800" >
  <p>Capa do projeto no <a href="https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web?node-id=0%3A1">Figma</a></p>
	<img  src=".github/teacherList.png"  alt="Teacher list page example" width="800" >
  <p>Tela de listagem de professores</p>
</div>

<br/>


Proffy é uma plataforma de estudos online que tem objetivo conectar alunos e professores.

Essa aplicação foi desenvolvida durante a 2ª edição da <strong>Next Level Week</strong> (trilha Omnistack), distribuída pela [Rocketseat](https://rocketseat.com.br/).

<br/>
<a name="tecnologias"/>

## :rocket: Tecnologias

O projeto foi construído utilizando as seguintes tecnologias:

. [TypeScript](https://www.typescriptlang.org/)<br/>

. [ReactJS](https://reactjs.org/)<br/>

. [Node.js](https://nodejs.org/en/)<br/>


<br/>
<a name="pre-requisitos"/>

## :computer: Como executar o projeto

ANTES DE MAIS NADA

. Você precisa ter o `node.js` instalado na sua máquina; <br/>
. Também, é necessário ter um gerenciador de pacotes seja o `npm` ou `yarn`; <br/>

CLONE ESSE REPOSITÓRIO

```sh

$ git clone https://github.com/iaraoliveira/proffy.git

```

 INSTALE AS DEPENDÊNCIAS

```sh

# caso você utilize o npm
$ npm install

# caso você utilize o yarn
$ yarn

```

EXECUTE A APLICAÇÃO

```sh

#vá para a pasta server
$ cd server

# prepare seu banco de dados
$ yarn knex:migrate

# inicie o backend
$ yarn start

```

```sh

# vá para a pasta web
$ cd web

# inicie a aplicação web
$ yarn start

```

<br/>
<a name="licenc-a"/>

## :notebook_with_decorative_cover: Licença

Este projeto está sob licença MIT, para saber mais, acesse o arquivo [LICENSE](./LICENSE)


<br/>
<a name="autor"/>

<div align='center'>
  <strong>Feito com :white_heart: por iara</strong>
  <br/>
  <a href="https://www.linkedin.com/in/iara/">entre em contato</a>
</div>