# Store Manager

## Contexto

O foco principal deste projeto é, com base nos ensinamentos da **Trybe**, desenvolver uma **API RESTful** utilizando a arquitetura **MSC (Model-Service-Controller)**. O sistema criado é uma plataforma de gerenciamento de vendas no formato **dropshipping**, que permite realizar as operações de **CRUD** (Create, Read, Update, Delete) para produtos e vendas. A aplicação utiliza o banco de dados **MySQL** para a gestão de dados e segue as boas práticas de desenvolvimento de APIs.

<details>
  <summary>O que é a Trybe?🤔</summary>
  A Trybe é uma escola de desenvolvimento web genuinamente comprometida com o sucesso profissional de seus estudantes. Com o Modelo de Sucesso Compartilhado (MSC) oferecido pela Trybe Fintech, uma instituição financeira autorizada pelo Banco Central do Brasil, os alunos têm a opção de pagar apenas quando estiverem trabalhando.
</details>

<details>
  <summary>🎲Diagrama ER, Entidades e Scripts</summary>
  <div style="display:flex; justify-content:center;  align-items:center; width="100%">
  <img src="Preview/erStoreManager.png" alt="page1"/>
  </div>
</details>

<details>
  <summary><h3>Objetivos do Projeto:</h3></summary>

  1. **Desenvolvimento da API**:
   - Implementar endpoints para criar, listar, atualizar e deletar **produtos** e **vendas**.
   - A API é capaz de gerenciar produtos, permitindo que os usuários adicionem, visualizem, atualizem e removam produtos do banco de dados.
   - A API também oferece funcionalidades de gerenciamento de vendas, permitindo registrar múltiplos produtos em uma venda e acompanhar os detalhes das transações.

2. **Arquitetura MSC**:
   - Seguindo o padrão **MSC**, a aplicação foi organizada em três camadas principais:
     - **Model**: Responsável por interagir com o banco de dados.
     - **Service**: Contém a lógica de negócios e validações.
     - **Controller**: Recebe as requisições e envia as respostas ao cliente.
   
3. **Validações e Regras de Negócio**:
   - Foram implementadas diversas validações para garantir a consistência dos dados. Os endpoints de produtos e vendas validam o corpo da requisição antes de acessar o banco de dados, garantindo que as informações enviadas pelos clientes estejam corretas.

4. **Testes Automatizados**:
   - Um dos grandes focos deste projeto foi a implementação de **testes automatizados**. A aplicação foi testada para garantir a cobertura mínima exigida, com testes unitários escritos para cobrir todas as camadas da aplicação.
   - Os testes foram implementados utilizando a ferramenta **Mocha**, e mockando o banco de dados nas camadas de model.
</details>

<details>
  <summary><h3>Funcionalidades Implementadas:</h3></summary>

  
- **Produtos**:
  - **GET /products**: Retorna todos os produtos cadastrados no banco de dados.
  - **GET /products/:id**: Retorna o produto com o ID fornecido na URL.
  - **POST /products**: Cadastra um novo produto no banco de dados.
  - **PUT /products/:id**: Atualiza um produto existente.
  - **DELETE /products/:id**: Remove um produto com base no ID fornecido.

- **Vendas**:
  - **GET /sales**: Retorna todas as vendas registradas.
  - **GET /sales/:id**: Retorna uma venda específica pelo ID.
  - **POST /sales**: Cadastra uma nova venda, permitindo registrar múltiplos produtos.
  - **DELETE /sales/:id**: Remove uma venda com base no ID fornecido.
</details>

<details>
  <summary><h3>Habilidades Desenvolvidas:</h3></summary>

  
- **API RESTful**: Desenvolvimento de uma API seguindo os padrões REST, utilizando **Node.js** e **Express**.
- **Arquitetura MSC**: Organização da aplicação em camadas (Model-Service-Controller), separando responsabilidades e melhorando a manutenção do código.
- **MySQL**: Utilização de um banco de dados relacional para armazenar e manipular informações de produtos e vendas.
- **Validações e Testes**: Implementação de validações para garantir a integridade dos dados e desenvolvimento de testes unitários para cobrir o comportamento da aplicação.
- **Testes Automatizados**: Utilização do **Mocha** para testar as funcionalidades da API, com foco em cobrir as camadas da aplicação e simular interações com o banco de dados.
</details>

Este projeto foi uma excelente oportunidade para aplicar conceitos fundamentais do desenvolvimento backend, incluindo a criação de APIs RESTful, validações de dados, e a importância dos testes automatizados no ciclo de desenvolvimento de software.


## Tecnologias Usadas


- [Express](https://expressjs.com/) - Framework para Node.js, utilizado para gerenciar rotas e middlewares na criação da API.
- [Body-parser](https://www.npmjs.com/package/body-parser) - Middleware usado para manipular o corpo das requisições HTTP, facilitando a leitura de JSON e outros formatos.
- [Express-async-errors](https://www.npmjs.com/package/express-async-errors) - Módulo que simplifica o tratamento de erros em rotas assíncronas no Express.
- [Joi](https://joi.dev/) - Biblioteca para validação de dados no backend.
- [MySQL2](https://www.npmjs.com/package/mysql2) - Cliente MySQL para Node.js com suporte a promessas, utilizado para conectar e manipular o banco de dados MySQL.
  
- [Mocha](https://mochajs.org/) - Framework de testes JavaScript utilizado para realizar testes unitários.
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções utilizada em conjunto com Mocha para validar os resultados dos testes.
- [Chai-http](https://www.chaijs.com/plugins/chai-http/) - Plugin do Chai para fazer requisições HTTP nos testes.
- [Frisby](https://docs.frisbyjs.com/) - Biblioteca para testar APIs RESTful.
- [Jest](https://jestjs.io/) - Framework de testes JavaScript com suporte a mocks e spies.
- [Sinon](https://sinonjs.org/) - Ferramenta para criar mocks, stubs e spies em testes.
- [Sinon-chai](https://www.chaijs.com/plugins/sinon-chai/) - Extensão para integração entre Sinon e Chai.
- [NYC](https://www.npmjs.com/package/nyc) - Ferramenta de cobertura de código, utilizada para medir o percentual de código testado.


## Entre em contato:
<a href="mailto:zazac3179@gmail.com" target="_blank">
  <img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="E-mail" height="40" width="auto" />
</a>
<a href="https://www.linkedin.com/in/isaque-s-oliveira/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="isaque oliveira" height="30" width="40" /></a>
<a href="https://wa.me/5574981510614" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/whatsapp.svg" alt="WhatsApp" height="30" width="40" /></a>
