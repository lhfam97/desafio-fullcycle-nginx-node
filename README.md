<p align="center">
  <a href="https://fullcycle.com.br/" target="blank"><img src="https://fullcycle.com.br/wp-content/themes/fullcycle/assets/images/fullcycle-logo.svg"/></a>
</p>

# Desafio Go Docker

## Descrição do desafio

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

```bash
docker-compose up -d
```

## Passos para execução do desafio

1 - Passo > Rodar o docker-compose up -d

```bash
docker-compose up -d
```

Dentro de instantes a aplicação estará no ar

2 - Passo > Acessar na url http://localhost:8080

Caso apresente erro 502, aguarde mais alguns instantes e atualize a página

3 - Passo Extra > Fazer uma requisição http do tipo GET para url: http://localhost:8080/generate

Isso adicionará um novo usuário aleatório na tabela de people que poderá ser visualizado pela url: http://localhost:8080

# Author

<table>
   <tr>
      <td align="center">
         <a href="http://github.com/lhfam97/">
            <img src="https://github.com/lhfam97.png" width="100px;" alt="Imagem de Luís Henrique Machado"/>
            <br />
            <sub>
               <b>Luís Henrique Machado</b>
            </sub>
          </a>
          <br />
          <a href="https://www.linkedin.com/in/luís-henrique-machado-98037a127/" title="Linkedin">@luishenriquemachado</a>
          <br />
          <a href="https://github.com/lhfam97/desafio-fullcycle-nginx-node/commits?author=lhfam97" title="Code">💻</a>
      </td>
   </tr>
</table>
