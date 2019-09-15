# Totvs - Reactron

Reactron é um projeto simples que integra o [React.js](https://reactjs.org/), o [Electron](https://electronjs.org/) e o [Material Design](https://material-ui.com/pt/) como interface.

## Intuito do projeto

Este projeto pretende demonstrar como criar aplicativos simples, que não necessitem diretamente da Plataforma TOTVS, mas que possam facilmente consumir nosso ecossistema, como Serviços Rest, Web Services e integrações baseadas em [ESB](https://pt.wikipedia.org/wiki/Enterprise_Service_Bus), enfim, tudo que possa se comunicar através de protocolos como HTTP/S e websocket, **facilitando entregas e integrações** para nossos clientes.

## Falando dos componentes

O **Electron** permite a construção de aplicativos desktop multiplataforma utilizando o HTML5. Entre os aplicativos que usam a plataforma estão o VSCode, as versões desktop do WhatsApp, Slack, Skype, Ryver, entre muitos outros.  

O **React** é o framework desenvolvido pelo Facebook, hoje (Set/2019) o "mais amado", seguido de perto pelo Vue, veja mais em  [Stackoverflow - Most Loved](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-web-frameworks)

O importante é entender que este projeto poderia utilizar o Angular, Vue, Lit ou qualquer outro framework, pois todos são passíveis de uso em conjunto com o Electron.

O **Material Design** é uma linguagem de design desenvolvida pela Google, fortemente baseada em layouts, facilitando a padronização de formulários. Ela foi estendida para todos os frameworks de expressão do mercado.

## Instalando

Você precisará do [NPM](https://nodejs.org/en/) instalado.
Siga os comandos abaixo:

```bash
# Clone o repositório
git clone https://github.com/totvs/reactron.git reactron

# Acesse o diretório
cd reactron

# Instale as dependencias
npm install
```

## Execute o projeto à partir do comando

```bash
npm start
[ou]
npm run start
```

## Compilando para distribuição

```bash
npm run dist
```

O aplicativo será gerado na pasta `dist` de seu projeto.


## Como o Electron trabalha com o React

O template compila os arquivos `*.js` (jsx) contidos na pasta `src` para arquivos JavaScript padrão para pasta `app`, incluindo também os arquivos `*.html` e `*.css`, juntamente com o arquivo `main.js` (inicializador do Electron). 

Ele então empacota o aplicativo utilizando o `gulp` através do `npm`.


<p align="center"> 
  <img src="https://github.com/totvs/reactron/blob/master/images/electron_sequence.png" alt="electron_sequence" border="0">
</p>

## Telas

<p align="center"> 
  <img src="https://github.com/totvs/reactron/blob/master/images/screen1.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/totvs/reactron/blob/master/images/screen2.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/totvs/reactron/blob/master/images/screen3.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/totvs/reactron/blob/master/images/screen4.png" alt="electron_sequence" border="0">
</p>

## Licença

Esse projeto está sob a licença [MIT](https://www.opensource.org/licenses/mit-license.php)

Baseado no projeto [Electrate](https://github.com/mmick66/electrate) (sob licença: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR))
