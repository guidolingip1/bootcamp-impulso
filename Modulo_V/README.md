# 🚀 Conceitos e melhores práticas com bancos de dados PostgreSQL

## 👩‍💻 Introdução ao banco de dados PostgreSQL

### Fundamentos de banco de dados

- Dados: Valores brutos, fatos brutos, observações documentadas, registros soltos...
- Informações: Conjuntos, agrupamentos de dados que relacionados geram valor, que tem sentido./

- Modelo relacional: Modelo mais comum que classifica e organiza as informações em tabelas com linhas e colunas.
  - Chave primária / PK: Identificador da tabela (nunca se repete)
  - Chave Estrangeira / FK: Refencia uma tabela em outra.

## 👩‍💻 Objetos e tipos de dados do PostgreSQL

### Conceitos e melhores praticas

- postgresql.conf: Arquivo onde estão definidas e armazenadas todas as configurações do servidor PostgreSQL.

  - view pg_settings: É onde estão contidas todas as configurações atuais. (select name, setting FROM pg_settings)
  - LISTEN_ADDRESSES: IPs que o servidor vai liberar conexões.
  - PORT: A porta que o servidor vai escutar
  - MAX_CONNECTIONS: Número máximo de conexões.
  - PASSWORD_ENCRYPTION
  - SSL: Habilita conexão criptografada

- pg_hba.conf: Arquivo responsável pela autenticação dos usuários no servidor.

  - TRUST: Conexão sem requisição de senha
  - REJECT: Rejeitar conexões
  - MD5: Criptografia MD5
  - PASSWORD: Senha sem criptografia

  NUNCA USAR "host all all 0.0.0.0/0 md5" nas configurações, isso dá acesso a qualquer pessoa de qualquer lugar para usar o banco de dados.

- pg_ident.conf: Arquivo responsável por mapear os usuários do SO com os usuários do BD

### Comandos administrativos

- createdb
- createuser
- dropdb
- initdb
- pg_ctl
- pg_basebackup
- pg_dump
- pg_restore
- psql

### O que é um cluster?

Coleção de bancos de dados que compartilham as mesmas configurações.

### Objetos e comandos do banco de dados

- Database: um banco.

  - CREATE DATABASE name
  - ALTER DATABASE name RENAME TO new_name
  - DROP DATABASE [name]

- Schema: Schema é um set de tabelas relacionadas, não é um banco.
  - CREATE SCHEMA IF NOT EXISTS schema_name

### DML e DDL

- DATA MANIPULATION LANGUAGE: INSERT, UPDATE, DELETE, SELECT
- DATA DEFINITION LANGUAGE: CREATE, ALTER, DROP

## 👩‍💻 A partir daqui basicamente tudo é aula pratica.

# 🚀 Introdução ao MongoDB e Bancos de dados NoSQL

## 👩‍💻

NOSQL: Not Only SQL

- Relacionais:
