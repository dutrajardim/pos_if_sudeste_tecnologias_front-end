# Quinta atividade

Listas e chaves usando react

Instruções fornecidas:

OBS: Lembre-se de enviar um áudio de 2 a 5 minutos no SIGAA explicando seu código-fonte e um link do repositório no GitHub contendo os arquivos produzidos.

OBS2: Seu layout não precisa ficar idêntico ao abaixo, a parte funcional é mais importante. No entanto, defina o visual de maneira criativa.


1. Crie um novo projeto React.JS vazio;
2. Baseado no exemplo abaixo, crie uma aplicação para marcar tarefas. Ao digitar uma tarefa e apertar ENTER, por exemplo, a mesma será adicionada em uma lista de tarefas.
3. Faça com que sua aplicação permita que os itens sejam editados e excluídos, conforme o exemplo abaixo.
4. Finalmente, faça com que a cor de fundo fique azul caso as palavras “estudar” ou “ler” apareçam no item em questão.


Link para a atividade, [aqui.](https://docs.google.com/document/d/1XYpjpTqumMv_kuMB-7eueiF-wGSE1KwDK5vhvEXMwLU/edit)

## Solução

Foi criada uma aplicação de exemplo de lista de tarefas conforme apresentado no link das instruções da atividade. Para implementação da atividade, foram utilizadas três metodologias visando comparar as abordagens, e ao final analisar as implementações.
No arquivo raiz index.js é instanciado três aplicações em uma mesma página. Todas as três aplicações apresentam as mesmas funcionalidades, sendo que na primeira foi utilizado States e Props, na segunda foi utilizado Context API e na terceira foi utilizado Redux. Os arquivos de cada implementação foram separados nas pastas conforme abaixo:

* States e Props: ./src/states
* Context API: ./src/contextApi
* Redux: ./src/redux

Dependências utilizadas:
* babel (preset-env, preset-react)
* postcss (preset-env, nested, normalize)
* webpack (babel-loader, postcss-loader)
* react
* redux
* react-redux


Para iniciar o ambiente de desenvolvimento foi configurado um comando no **package.json** que inicia o webpack-dev-server. O comando pode ser acionado utilizando o NPM como mostrado a seguir:

```bash
> npm run start
```

## Analise

O Redux foi criado por Dan Abramov buscando facilitar o gerenciamento do estado da aplicação, e posteriormente o Facebook disponibilizou a Context API, que também é voltada para o gerenciamento do estado da aplicação adotando alguns princípios um pouco diferentes àos do Redux. 
O gerenciamento do estado da aplicação também é possível sem o uso de Redux ou Context API, por States e Props. Contudo, conforme podemos ler em posts na web, e ainda conforme evidenciado nesta atividade ao compararmos os códigos das abordagens apresentadas, ao segmentarmos a aplicação em componentes menores, a passagem do estado da aplicaçao pelos elementos da árvore DOM (Document Object Model) deixa o gerenciamento do estado complexo, e pode levar a uma manutenção mais custosa dos códigos. Contudo, se evitarmos a segmentação da aplicação em componentes menores, não será necessária a passagem do estado, mantendo a complexidade baixa, porem teríamos funções mais robustas, o que dificultaria o reaproveitamento do código.

Para as abordagens com Redux e com a Context API na presente aplicação, temos que a Context API já é disponibilizada junto ao React, enquanto para a utilização do Redux foi necessário a instalação de duas outras dependências (redux, react-redux). Ainda, como ambas as soluções apresentam suas vatagens de implementação conforme a complexidade no gerenciamento do estado da aplicação aumenta, e por utilizamos aqui uma aplicação simples, não ficou evidente vantagens e desvantagens ao utilizarmos uma ou outra.

## Links úteis

[Courso disponibilizado por Dan Abramov sobre Redux.](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)