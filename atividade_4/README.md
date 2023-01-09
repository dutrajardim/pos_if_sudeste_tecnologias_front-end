# Quarta atividade

Componentes usando hooks, eventos e renderização condicional

Instruções fornecidas:

OBS: Lembre-se de enviar um áudio de 2 a 5 minutos no SIGAA explicando seu código-fonte e um link do repositório no GitHub contendo os arquivos produzidos.

1. Crie um novo projeto React.JS;
2. Introduza uma caixa de texto e, por meio de um componente usando React Hooks que você vai criar, faça com que ele apresente o total de caracteres conforme o exemplo abaixo. Use props, states e o conceito de eventos conforme mostrado nos vídeos.
3. Usando Renderização Condicional e React Hooks, crie no mesmo projeto (ou um novo) um componente que verifique se a pessoa está logada. Se estiver, mostre uma página informando isso de uma maneira visualmente atrativa. Caso contrário, informe a pessoa que ela deve se logar. Customize a vontade o visual da página.


Link para a atividade, [aqui.](https://docs.google.com/document/d/1mwXg_sX8n6kfbNuyx5B8XXyjmgedNdVlQLFosEBv380/edit)

## Solução

Foi criado um campo de texto para compartilhamento de uma mensagem com os objetivos para o ano novo. Conforme e digitado a mensagem, pode ser acompanhado na parte inferiror direita do campo uma classifiador do texto que informa a quantidade de caracteres e de palavras, colorindo com a cor de alerta (ruim), aviso (bom) e a cor primaria da aplicação (excelente). Para enviar o texto há uma regra que exite estar logado, e caso não esteja logado o botão é desativado e uma alerta é apresentado.
Quando o usuário esta logado é apresentado um botão para sair.

Dependências utilizadas:
* babel (preset-env, preset-react)
* postcss (preset-env, nested, normalizer)
* webpack (babel-loader, postcss-loader)
* react
* redux
* react-redux


Para iniciar o ambiente de desenvolvimento foi configurado um comando no **package.json** que inicia o webpack-dev-server. O comando pode ser acionado utilizando o NPM como mostrado a seguir:

```bash
> npm run start
```