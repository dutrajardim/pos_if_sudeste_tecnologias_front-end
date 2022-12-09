# Segunda atividade

Instruções fornecidas:

1. Usando as tecnologias elencadas no tópico dessa semana, crie a landing page de seu provável projeto de TCC. Lembre-se de inseri-la em um repositório do GitHub. A submissão será feita pelo SIGAA e deverá conter:
* O link da pasta contendo a tarefa dessa semana no GitHub;
* Um áudio entre 2 e 5 minutos ou vídeo explicando o código-fonte de seu projeto;

## Solução

Dependências utilizadas:
* bootstrap
* express
* nodemon (dev)
* sass (dev)

Foi realizado o download da biblioteca *Bootstrap* utilizando o gerenciado de pacotes para Node.js NPM, e utilizado o compilador *Sass* para importar o *Bootstrap*.

Para iniciar o ambiente de desenvolvimento foi configurado um comando no **package.json** para iniciar o nodemon, este reinincia o servidor *express* sempre que for atualizado um arquivo scss ou html. Quando é salvo uma alteração em um arquivo scss, o comando compila um arquivo css que é disponibilizado de forma estática pelo servidor *express*. O comando pode ser acionado utilizando o NPM como mostrado a seguir:

```bash
> npm run dev
```

O compilador *sass* esta configurado para salvar o arquivo gerado no diretório **public/assets/styles**.
Foram utilizadas imagens e icones retirados do site da [envato elements](https://elements.envato.com/) e da [creative fábrica](https://www.creativefabrica.com/pt/) para auxiliar na estilização do site.

Considerando que a idéia do trabalho de TCC ainda esta se formando, algumas partes do site permaneceram com textos de placeholders.

Foi utilizado ainda, um recurso em JavaScript para estilizar a navbar ao acionar o scroll vertical, agradecimentos ao [css-tricks](https://css-tricks.com/styling-based-on-scroll-position) 🤪.

Normalmente não utilizo o script fornecido pelo bootstrap, então o acionamento do menu mobile foi realizado com script próprio.

Dentre os recursos do bootstrap que não havia explorado antes deste exercício, dou destaque à API de classes utilitárias. A documentação oficial parece não estar completa para a versão 5, então tive um pouco de dificuldade, mas o stackoverflow se mostrou bem completo, e a função é bem interessante e vale a pesquisa 🤪.