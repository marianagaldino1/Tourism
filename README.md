Tourism Project

Este projeto é uma aplicação web para cadastro e listagem de pontos turísticos, desenvolvida como parte de um teste técnico.

Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

Backend (Tourism.API, Tourism.Application, Tourism.Domain, Tourism.Infrastructure)

•
C# e .NET 9: Linguagem e framework principal para o desenvolvimento da API.

•
ASP.NET Core: Framework para construção da API web.

•
Entity Framework Core: ORM (Object-Relational Mapper) para acesso e manipulação de dados em banco de dados relacional.

•
SQL Server: Banco de dados relacional utilizado para persistência dos dados.

•
Swagger: Para documentação e teste da API.

Frontend (frontend)

•
React : Biblioteca JavaScript para a construção de interfaces de usuário interativas.

•
TypeScript: Linguagem que adiciona tipagem estática ao JavaScript, melhorando a manutenibilidade e detecção de erros.

•
Axios/Fetch: Utilizado para realizar requisições HTTP e comunicação eficiente com a API RESTful.Estrutura do Projeto

Estrutura do Projeto

O projeto está organizado em uma solução Visual Studio (Tourism.sln) com os seguintes projetos:

•
Tourism.API: Projeto principal da API ASP.NET Core, responsável por expor os endpoints e orquestrar as requisições.

•
Tourism.Application: Contém a lógica de negócio e os serviços da aplicação.

•
Tourism.Domain: Define as entidades de domínio e interfaces de repositório.

•
Tourism.Infrastructure: Implementa o acesso a dados (Entity Framework Core, DbContext, Migrations) e os repositórios.

•
frontend: Aplicação React com TypeScript, responsável pela interface do usuário.

Configuração do Ambiente

Para configurar e executar o projeto, siga os passos abaixo:

Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

•
.NET 9 SDK

•
Node.js (versão LTS recomendada)

•
npm ou Yarn

•
SQL Server 
•
Visual Studio (opcional, mas recomendado para desenvolvimento .NET)

1. Clonar o Repositório

Bash


git clone https://github.com/marianagaldino1/Tourism.git
cd Tourism



2. Configurar o Banco de Dados

O projeto utiliza SQL Server. A string de conexão padrão está configurada no arquivo Tourism.API/appsettings.json:

JSON


"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=TourismDb;Trusted_Connection=True;TrustServerCertificate=True"
}



Atenção: Você pode precisar ajustar Server=localhost\\MSSQLSERVER01 para o nome da sua instância do SQL Server. Se estiver usando Docker ou outra configuração, adapte a string de conexão conforme necessário.

Para aplicar as migrações e criar o banco de dados, navegue até a pasta Tourism.API e execute os seguintes comandos:

Bash


cd Tourism.API
dotnet ef database update
cd ..



3. Executar o Backend (API )

Navegue até a pasta Tourism.API e execute a aplicação:

Bash


cd Tourism.API
dotnet run



A API estará disponível em https://localhost:5173 (ou outra porta configurada ). O Swagger UI estará acessível em https://localhost:44390/swagger(ou outra porta configurada ).

4. Executar o Frontend

Navegue até a pasta frontend e instale as dependências, em seguida inicie a aplicação:

Bash


cd frontend
npm install  # ou yarn install
npm run dev  # ou yarn dev



O frontend será iniciado em http://localhost:5173 (ou outra porta configurada pelo Vite ).

Funcionalidades

•
Cadastro de Pontos Turísticos: Formulário para adicionar novos pontos com nome, descrição, localização, cidade e estado.

•
Listagem Paginada: Exibe os pontos turísticos cadastrados, ordenados de forma decrescente pela data de inclusão, com paginação.

•
Busca/Filtro: Permite pesquisar pontos turísticos por nome, descrição ou localização.

•
Detalhes do Ponto Turístico: Visualização completa das informações de um ponto turístico selecionado.

•
Menu de Navegação: Facilita a alternância entre as páginas de cadastro e listagem.

Melhorias Futuras (Caso Houvesse Mais Tempo)

Caso houvesse mais tempo disponível para o desenvolvimento, as seguintes melhorias seriam implementadas para aprimorar ainda mais o projeto:

•
Autenticação e Autorização: Implementar um sistema de autenticação de usuários (ex: JWT) e controle de acesso baseado em papéis (RBAC) para proteger as rotas da API e funcionalidades do frontend.

•
Validação de Dados Avançada: Aprimorar a validação de entrada de dados no frontend e backend, utilizando bibliotecas de validação mais robustas e exibindo mensagens de erro mais amigáveis ao usuário.

•
Testes Unitários e de Integração: Adicionar cobertura de testes unitários para a lógica de negócio (Domain e Application) e testes de integração para a API, garantindo a robustez e a manutenibilidade do código.


•
Integração com API de Mapas: Integrar uma API de mapas (ex: Google Maps, OpenStreetMap) para exibir a localização dos pontos turísticos de forma visual e permitir a busca por proximidade.


