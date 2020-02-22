# Proyecto Librería React

Introducción al desarollo de librerías en React desde 0, con el objetivo de obtener las nociones básicas necesarias para poder abordar proyectos de librería más complejos con React.

## El repositorio contiene dos partes
* app-react: Directorio con el proyecto de React que consume la librería
* lib-react: Directorio con el proyecto de librería React que va a ser usado y consumido desde la app.

## Instrucciones de uso

### Clonar el repositorio

```
git clone git@github.com:npm-js-ts-angular-modules-course/libreria-react-basic.git
```

### Instalar las dependencias de la librería y de la aplicación

#### App (app-react)

```
cd app-react
npm install
```

#### Librería (lib-react)

```
cd lib-react
npm install
```

### Enlazar la librería localmente para consumirla

#### Librería (lib-react)

```
cd lib-react
npm link
```

#### App (app-react)

```
cd app-react
npm link @mugan86/react-basic-library
```

### Inicializar la aplicación

```
cd app-react
npm start
```