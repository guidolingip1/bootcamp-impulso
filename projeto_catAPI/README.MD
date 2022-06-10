## Resultado

### Tenho um projeto exatamente igual a este publicado em [Invocacao dos Miau](https://github.com/guidolingip1/Gerador_de_gatos)

## Mas se estiver com preguiça aqui vai o Readme dele

---

# Gerador de gatos

![Miau](https://github.com/guidolingip1/Gerador_de_gatos/blob/main/miau.gif)

### Bora consumir uma API com NodeJS?

Primeiro precisamos encontrar uma API, de preferência que seja Grátis.

1. Link para diversas APIs públicas -> https://github.com/public-apis/public-apis
2. Link para a API que eu utilizei no projeto -> https://docs.thecatapi.com

### Próximo Passo

Agora que escolhemos nossa API vamos iniciar nosso projeto

1. Vá até o local onde você vai querer salvar seu projeto
2. Dentro da pasta crie um react-app com o seguinte comando

   npx create-react app nome-do-seu-projeto

3. Após isso abra a pasta que foi gerada no seu editor de escolha

### Criando nosso componente Gatos

1. Dentro da pasta do seu projeto crie um arquivo chamdo Gatos.js
2. Por ser um projeto pequeno, colocaremos tudo que vamos utilizar dentro deste componente

### Codando nosso componente 🐈.js

Começamos criando um componente vazio, assim.

    const  Gatos  = () => {
        return (
            <div  className="gatos">
    	        Meaw
            </div>
        );
    }

        export  default  Gatos;

Como podemos observar na última linha estamos exportando Gatos, logo podemos importa-los em outro componente e utilizarmos a vontade.
Mas antes temos que codar os 🐈

### Depois de criado o componente vazio, vamos fazer um front simples

    const  Gatos  = () => {
        return (
    	    <div  className="containerFora">
    		    <div  className="container">

    			    <h1>Invocação dos Miau 😻</h1>
    			    <img  src={url}  className='gatoImg'  />
    			    <button  onClick={fetch_data}  className='btn'>Gerar Miau</button>

    		    </div>
    	    </div>

        );
    }

    export  default  Gatos;

Explicando o código de dentro do return

1. Temos duas divs que são para estética/organização, porém temos que levar em consideração que o conteúdo retornado precisa estar dentro de uma div obrigatória ou um fragmento (<> </>).
2. Dentro das divs temos o conteúdo que é o mostrado em tela h1, img e título
3. Podemos ver que dentro do button onClick temos fetch_data, não se preocupe veremos adiante essa função.

### Adicionando um css para ficar "bonitinho"

Como o CSS não é o foco do artigo, irei apenas postar o Código
Não esqueçam de criar um arquivo .css e chamar ele em app.js

    .containerFora {
        width:  100%;
        display:  flex;
    	align-items:  center;
        justify-content:  center;
    }

    .container {
        width:  50%;
        display:  flex;
        flex-direction:  column;
        align-items:  center;
        justify-content:  center;
        background:  linear-gradient(13deg, #ffd4f4  14%,#d2c5fc  73%);
        background:  -moz-linear-gradient(13deg, #ffd4f4  14%,#d2c5fc  73%);
        background:  -webkit-linear-gradient(13deg, #ffd4f4  14%,#d2c5fc  73%);
        border-radius:  10px  10px  10px  10px;
        box-shadow:  7px  8px  12px  #e8e8e8;
        margin-top:  100px;
    }

    .gatoImg {
        object-fit:  cover;
        width:  350px;
        height:  350px;
        padding:  30px;
    }

    .btn {
        width:  300px;
        height:  35px;
        margin-bottom:  35px;
        border-radius:  8px;
    }

### Agora que a parte estética está pronta vamos consumir a API usando Fetch

A Gui mas o que é fetch?
fetch() é uma função do javascript para fazer uma requisição a um servidor e carregar a informação em uma página.

Dentro de Gatos.js criaremos nossa função fetch, como no exemplo abaixo

    import { useState } from  "react"; //Importamos o useState pois usaremos para setar nossa URL

    const  Gato  = () => {
    	//Usaremos URL e setURL para fazer o update da URL quando clicarmos no botão novamente
        const [url, setUrl] =  useState();

        //Vamos consumir nossa api com um fetch()
        function  fetch_data() {
    	    fetch('https://api.thecatapi.com/v1/images/search').then(res  => {
    		    if(res.ok){
    			    return  res.json();
    		    }
    		    throw  new  Error('Failed to fetch');
            }).then(jsonRes  => {
    		    console.log(jsonRes)
    		    setUrl(jsonRes[0].url);
    	    })
        }

        return (
    		    <div  className="containerFora">
    			    <div  className="container">
    				    <h1>Invocação dos Miau 😻</h1>
    				    <img  src={url}  className='gatoImg'  />
    				    <button  onClick={fetch_data}  className='btn'>Gerar Miau</button>
    			    </div>
    		    </div>
    	    );
    }

    export  default  Gato;

Explicando a função fetch()

1. fetch('https://api.thecatapi.com/v1/images/search'), aqui estamos fazendo uma requisição de informação desta url
2. Então usamos o .then que é uma função promise "promessa" , que é assíncrona e é perfeita para lidar com APIs, básicamente dentro do .then() estamos dizendo o seguinte se a resposta do fetch for OK então, a função retorna um JSON (JavaScript Object Notation) contendo as informaçõs do 🐈 que recebemos.
3. Se não retornar OK, Lançamos um erro "throw new Error('Failed to fetch');"
4. E depois de tudo isso a gente them outro .then() onde vamos pegar nosso objeto JSON, imprimir ele no console e pegar o valor URL de dentro do parâmetro 0.

### Como eu descobri qual parâmetro usar?

Eu dei um console.log do objeto

    [{…}]
        0: {
    	    breeds: Array(0),
    	    id: "c9g",
    	    url: "https://cdn2.thecatapi.com/images/c9g.jpg",
    	    width: 768,
    	    height: 1024
    	    }

## Conclusão

Nenhuma, esse projeto foi muito sem noção<br>
Espero que vocês tenham gostado, se sim, deixem um curtir/gostei, é muito importante.<br>
Cuidem dos seus 🐈🐈
