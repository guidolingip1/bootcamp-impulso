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
Onde ficam esses cookies? Esses cookies ficam dentro do headerfile
