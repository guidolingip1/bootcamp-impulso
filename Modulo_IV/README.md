# 🚀 Conhecendo os principais protocolos de Comunicação da Internet

## 👩‍💻 Protocolo de comunicação Web HTTP

### Como funciona o protocolo HTTP

HTTP significa HyperText Transfer Protocol, ele é responsável por fazer o intermédio entre cliente e servidor.

- Cliente: Mensagens de Request ~ Objetos Web
- Servidor: Mensagens de Response ~ Protocolo TCP
- Arquitetura: Client-Server

Quais os métodos

- GET: Pede informação para o servidor
- POST: Envia informação para o servidor
- PUT: Substitui um valor no servidor
- PATCH: Substituição parcial
- DELETE: Deleta um valor

### Mensagens HTTP Request e Response

Estrutura de um Request

```javascript
async function criarSessao() {
  const req = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await req.json();
  sessionId = json.session_id;
  console.log("Minha session: " + json.session_id);
}
```

Responses

- 200: OK
- 301: Moved Permanently
- 400: Bad Request
- 404: Not found
- 505: HTTP Version not suported

### Para que servem cookies e cache

Cookies são pequenos blocos de dados criados e utilizados pelo servidor para persistir dados no dispositivo do cliente.\
Onde ficam esses cookies? Esses cookies ficam dentro do headerfile.\

Tipos de cookies

- Cookies Persistentes: Podem durar dias.
- Cookies de Sessao: Duram até a sessao expirar.

O problema dos cookies é que eles podem serem invasivos e são passíveis de Hacking.

### O que é caching

Web Cache é um proxy server (proxy intermediário)\n
Exemplo:

- O cliente envia uma informação para o servidor
- A informação chega no proxy
- O proxy procura se ele tem a informação
- Se o proxy não tem o recurso ele envia para o servidor.
- O servidor responde para o cache, o cache atualiza ele mesmo e envia a resposta ao cliente

### O que o HTTP 2.0 tem de bom?

Multiplexação - Cada requisição é uma stream distinta.\
Priorização de recursos\

- Unica conexão persistente
- Compressão de header
- Server Push
- HTTPS por padrão
- Negociação no handshake

## 👩‍💻 HTTPS O que muda no protocolo

### Conceitos básicos de segurança da informação

- Criptografia por chave: Exemplo é a SHA

  - Chave Privada
  - Chave Pública

- Certificado Digital

### Protocolo SSL

- Secure Socket Layer
  - Segurança para conexões TCP
  - Confiabilidade
  - Integridade
  - Autenticidade

Qual a importância do SSL?\
Permite que os dados só sejam lidos por quem tem a chave relacionada.

### Operação de SSL e considerações finais

- São três fases
  - Handshake (TCP START - TCP RESPONSE - TCP CONFIRMATION)
  - Verificação de autenticidade: Uma vez que foi estbelecida a conexão se manda um Hellooo
  - Certificação: O servidor envia a chave pública que será utilizada para a EMS (Encrypted Master Secret Key)

### HTTPS e breve descrição do LGPD

O HTTPS é o HTTP + SSL, para esse tipo de conexão se usa a porta 443

- Protege contra Fishing
- Privacidade

## 👩‍💻 Protocolo de Comunicação WebSocket

A API do websocket roda por cima do HTTP, criando uma conexão BIDIRECIONAL entre cliente e servidor onde ambos podem enviar e receber dados.

- Filosofia do WebSocket
  - Origem segura
  - Endereçamento e protocolo
  - Camada
  - Encerramento do Handshake

# 🚀 Introdução ao ReactJS

## 👩‍💻 O que é React

- React é uma biblioteca JavaScript para criar UI.
- Foi criada em 2011 por Jordan Walke no FB

### Como configurar o react

- npm create-react-app
- Pode ser feita na mão a instalação

### O que é JSX

É uma sintax sugar para React.createElement

- O browser não interpreta o JSX, é necessário um transpilador (no caso o utilizado é o Babel)

### O que são Componentes e Props

- Componente é uma parte que será reutiliza, (menu, botao ...)
- Props são os propriedades que passamos para um componente

# 🚀 Desenvolvimento de aplicações para internet com ReactJS

## 👩‍💻 Estilos

Os estilos em React podem ser feitos das seguintes formas

- Inline
- CSS separado
- props

## 👩‍💻 Introdução ao Redux e fluxos de arquitetura com ReactJS

### O que é flux

Flux é uma arquitetura criada pelo facebook para comunicação entre componentes

- Arquitetura do flux

  - Action: Quando um estado precisa ser alterado é ela quem formata a mensagem.
  - Dispatcher: Dispatcher é o cara que a partir da mensagem da action determina qual store vai receber essa mensagem.
  - Store: Ela guarda todos os estados e é ela quem altera os estados
  - View: View é como um gerente intermediario, é Como se fosse um Middleware entre a Store e a Tela, é ela quem recebe as ordens da store e pede que o DOM faça as modificações

  ### Redux

  - Single source of truth: Uma única store
  - State é read only
  - Mudanças são feitas com pure functions

- Em Redux

  - Actions: As actions no redux são como as do flux, porém elas não enviam uma action pro dispatcher, elas retornam um objeto de action formatado
  - Store: A store cuida de toda árvore de estados e os reducers vão saber qual estado que muda
  - Reducers: São responsáveis por determinar qual estado vai mudar
  - Views: Provider, Connect, select

    O vDOM só vai fazer o UPDATE quando houver uma alteração em um componente

## 👩‍💻 Comunicação avançada entre aplicações

### Rest HTTP com react

Podemos usar o fetch, axios ou outras

- GET
- POST
- PUT
- DELETE

## 👩‍💻 Conceitos de qualidade de código e automação de testes em React

### TDD - Test-Driven Development

Tem por objetivo escrever um código que testa seu próprio código.

- Teste Unitário: Teste de uma unica funcionalidade
- Teste End-to-End (E2E): Aplicação completa

As bibliotecas mais comuns são:

- Jest
- Rect-testing-library

## 👩‍💻 Trabalhando com States e Effects no ReactJS

### O que são React Hook

Hooks são funções que permitem a você “ligar-se” aos recursos de state e ciclo de vida do React a partir de componentes funcionais.
Sem Hook

```javascript
import React from "react";

export function App(props) {
  let counter = 10;

  let contar = () => {
    let counterDiv = document.getElementById("counter-div");
    counterDiv.innerHTML = counter + 1;
    counter++;
  };

  return (
    <div className="App">
      <h1 id="counter-div">{counter}</h1>
      <button onClick={contar}>Clique</button>
    </div>
  );
}
```

Com Hook

```javascript
import React from "react";
import { useState } from "react";

export function App(props) {
  const [counter, setCount] = useState(1);

  let contar = () => {
    setCount(counter + 1);
  };

  return (
    <div className="App">
      <h1 id="counter-div">{counter}</h1>
      <button onClick={contar}>Clique</button>
    </div>
  );
}
```

## 👩‍💻 Aprofundamento sobre ciclo de vida do React

### Ciclo de vida e suas fases

- Inicialização
- Montagem
- Atualização
- Desmontagem

### Error Boundaries

- Manipuladores de evento
- Código Assíncrono
- Renderização no Servidor
- Erros Lançados na propria error boundary (ao invés de em seus filhos)

### Render props

Já vimos em outras aulas

### Typechecking

Prefiro usar typescript
