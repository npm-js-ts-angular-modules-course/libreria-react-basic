# Introducción a librería React básico

Hemos desarrollado una librería muy sencilla de tres componentes, 2 Function Component y un Class Component.

## Pasos para consumir la librería

### Instalar la librería

```
npm i @mugan86/react-basic-library
```

### Importar componentes

```
import { HelloFC, HelloCC, CustomBox } from '@mugan86/react-basic-library';
```
### Usos
En el siguiente apartado se describirán los usos que podremos darle a los componentes
#### HelloFC
```
<HelloFC/>                          // Hola Mundo
<HelloFC name="Anartz"/>            // Hola Anartz
<HelloFC name="Anartz Mugika"/>     // Hola Anartz Mugika
```
#### HelloCC
```
<HelloCC/>                                      // Hola Mundo
<HelloCC name="Anartz"/>                        // Hola Anartz
<HelloCC name="Anartz" lastname="Mugika"/>      // Hola Anartz Mugika
```



