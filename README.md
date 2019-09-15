# Totvs - Reactron

Reactron é um projeto simples que integra o [React.js](https://reactjs.org/), o [Electron](https://electronjs.org/) e o [Material Design](https://material-ui.com/pt/) como interface.


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
ou
npm run start
```

## Compilando para distribuição

```bash
npm run dist
```

O aplicativo será gerado na pasta `dist`.


## Como o Electron trabalha com o React

O template compila os arquivos `*.js` (jsx) contidos na pasta `src` para aqruivos JS (padrão) para pasta `app`, incluindo tambem os arquivos `*.html` e `*.css`, juntamente com o arquivo `main.js` (inicializador do Electron). 

Ele então empacota o aplicativo utilizando o `gulp` através do `npm`.


<p align="center"> 
  <img src="https://github.com/ricardomansano/My_Sources/blob/master/Electron/replay_recorder/images/electron_sequence.png" alt="electron_sequence" border="0">
</p>

## Telas

<p align="center"> 
  <img src="https://github.com/ricardomansano/My_Sources/blob/master/Electron/replay_recorder/images/screen1.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/My_Sources/blob/master/Electron/replay_recorder/images/screen2.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/My_Sources/blob/master/Electron/replay_recorder/images/screen3.png" alt="electron_sequence" border="0">
</p>
<p align="center"> 
  <img src="https://github.com/ricardomansano/My_Sources/blob/master/Electron/replay_recorder/images/screen4.png" alt="electron_sequence" border="0">
</p>

## Licença

Esse projeto esta sob a licença [MIT](https://www.opensource.org/licenses/mit-license.php)

Foi baseado no [Electrate](https://github.com/mmick66/electrate) (sob licença: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR))
