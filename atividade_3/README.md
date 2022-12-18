# Terceira atividade

Instruções fornecidas:

1. Crie um novo projeto React.JS vazio;
2. Além do componente App, construa também 2 componentes React chamados UsuarioEntrada e UsuarioSaida.
    * Introduza no componente UsuarioEntrada uma caixa de texto (input) 
    * Já o componente UsuarioSaida irá renderizar dois parágrafos de texto. O primeiro parágrafo irá conter um nome de usuário informado, enquanto o segundo possuirá um texto qualquer.
3. Ao iniciar a sua aplicação:
    * Passe um nome de usuário que será recebido, via props (e dentro do código), para UsuarioSaida;
    * Faça esse nome de usuário ser mostrado no primeiro parágrafo de texto de UsuarioSaida;

Feito isso, tente fazer o passo abaixo:

4. Crie um método que manipula, via states e eventos, o nome de usuário digitado na caixa de texto. Em tempo real, o nome de usuário escrito na caixa de texto será recebido e atualizado em um dos parágrafos de texto do componente UsuarioSaida.

Link para a atividade, [aqui.](https://docs.google.com/document/d/1RYavhAWbz1Mrm_8LggQUuIGX4U6LWUIU8jsUio9BzI0/edit)

## Solução

Dependências utilizadas:
* babel (preset-env, preset-react)
* webpack (babel-loader)
* react


Para iniciar o ambiente de desenvolvimento foi configurado um comando no **package.json** que inicia o webpack-dev-server. O comando pode ser acionado utilizando o NPM como mostrado a seguir:

```bash
> npm run start
```
