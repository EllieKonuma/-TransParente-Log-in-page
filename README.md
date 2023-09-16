# Transparent⚧️
<p>Nosso propósito é criar um hub informativo seguro, onde as pessoas trans possam encontrar informações confiáveis. 
  Para alcançar isso, dedicamos nossa equipe à curadoria cuidadosa, dissipando qualquer confusão que possa cercar 
  nossos direitos e apresentando essas informações de forma transparente e acessível.</p>

## Iniciando Projeto TransParente
```js
  npm install  
```
<p>Eu usei tambem a extenção Live Sever para a produção.</p>



## Tecnologias que usei ⚙️
<div>
  <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JS Icon"/> 
  <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML Icon"/>
  <img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS Icon" />
  <img width="50" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png" alt="Jest Icon" />
  <img width="50" src="https://global.discourse-cdn.com/business6/uploads/glitch/original/3X/3/9/396495e0bd885699d4f026d9a54f107fe71a2347.png" alt="Glitch Icon" />


  <ul>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Jest</li>
    <li>Glitch</li>
  </ul>
  <em>*Um adendo para quem não souber o que <a href="https://glitch.com/"><strong>Glitch</strong></a> é uma <strong>Rest Api</strong> que usei para conseguir criar classes sem perder na memoria e fazer uma aplicação melhor do que seria um site!<br>
    *Aqui esplica um pouco de como usar: <a href="https://juliangaramendy.dev/blog/json-server-glitch" >juliangaramendy</a>✨✨✨</em>
</div>

<h3>Como está mais ou menos meu db.json</h3>

```
  {
  "posts": [
    {
      "id": 1,
      "authorId": 1,
      "authorName": "Jonas Maria",
      "authorPic": "https://yt3.ggpht.com/-4vtbeqanrhihlYb3E8h08XT_yTIDm1s4MJ-bRTcclBzHnqehmQ1ZVU5PNbwfzW4gyfgx-CDSg=s900-c-k-c0x00ffffff-no-rj",
      "title": "Tudo Sobre Matrix Como Alegoria Trans",
      "intro": "Em 2020, Lilly Wachowski, no clube de filmes da Netflix, diz que Matrix é uma alegoria trans. Nesse vídeo, então, farei uma análise do filme buscando identificar possíveis paralelos e simbolismos que possam remeter à questão trans.",
      "thumbnail": "https://i3.ytimg.com/vi/u-5w4Df6Xk4/maxresdefault.jpg"
    },{...}
  ],
  "authors": [
    {
      "id": 1,
      "name": "Jonas Maria",
      "pic": "https://yt3.ggpht.com/-4vtbeqanrhihlYb3E8h08XT_yTIDm1s4MJ-bRTcclBzHnqehmQ1ZVU5PNbwfzW4gyfgx-CDSg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      "id": 2,
      "name": "Bryanna Nasck",
      "pic": "https://criadoresid.com/wp-content/uploads/2021/12/IMG_4357-2.jpg"
    },
    {...}
  ],
  "accounts": [
    {
      "name": "Ellie Yuka Konuma",
      "email": "yuka@gmail.com",
      "password": "123",
      "author": true,
      "authorId": 7,
      "id": 1
    },
    {...}
  ]
}
```


## Explicação do que fiz👩‍💻
<div>
  <p>Eu fiz para esse projeto uma pagina de Log in e Sing up para se cadastrar no site e assim ter atualizações pelo e mail e talvez tambem virar um Author!</p>

  <div align="center">
    <img width="450"  alt="gif apresentation page"      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2lhZG5tbXM5dHJyNnFrOWZqOWFscm9vZHkzNGJqb3M5ZmE3ZnYydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OGI1MwWcm2IGKKJyVw/giphy.gif" />
  </div>
  
  <h3>Eu usei 3 classes</h3>
  <ul>
    <il>Account</il>
    <il>Author</il>
    <il>Post</il>
  </ul>
  <p>A classe Account é meio que é a mãe por englobar as outras duas e sevir meio que de controller<br>
  E por ter mais controller da API como GET, PUT e POST.</p>

<h2>class Account</h2>
<img width="600"  alt="Accont code" src="https://pbs.twimg.com/media/F6JroV_WsAAIkx8?format=png&name=900x900" />
<img width="600"  alt="AccontMethods code" src="https://pbs.twimg.com/media/F6JrvNzWAAA5aY_?format=png&name=900x900" />

<h2>class Author</h2>
<img width="600"  alt="Author code" src="https://pbs.twimg.com/media/F6JryQHWoAA_0sU?format=png&name=900x900" />

<h2>class Post</h2>
<img width="600"  alt="Post code" src="https://pbs.twimg.com/media/F6JrzKvW8AAuxgv?format=png&name=900x900" />

</div>

<p>links para ver os sites ^o^</p>
<a href="https://transparente-login-singup.netlify.app/"><strong>transparente-login-singup</strong></a>
<a href="https://transparente.netlify.app/"><strong>transparente</strong></a>


