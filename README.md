# DESCRIPCIÓN

El siguiente repositorio contiene el código fuente con el que está construido mi sitio web, está hecho en [nextjs]( https://nextjs.org) y pensado para desplegarse en [firebase](https://firebase.google.com)

No es necesario utilizar firebase para hacer pruebas locales.

## Installation

Para clonar el repositorio usa el siguiente comando

```bash
$ git clone https://github.com/ChristianLlovera/LandingPage.git
```

renombra el archivo src>client>config>firebase.jsx_ por firebase.jsx

Se recomienda la versión de node 10.15.3 para correr el comando

```bash
$ npm install
```

Una vez se terminen de instalar los paquetes puedes correr un servidor de prueba con el comando

```bash
$ npm run dev
```

## Deploy en Firebase

Si deseas hacer un deploy en tu cuenta de firebase recuerda cambiar los datos del archivo .firebaserc

Luego para hacer pruebas en local ejecuta el comando

```bash
$ npm run serve
```

Y para hacer deploy

```bash
$ npm run deploy
```
