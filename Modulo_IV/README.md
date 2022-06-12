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
