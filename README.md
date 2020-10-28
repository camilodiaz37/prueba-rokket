# Rokket app

_Este proyecto consiste en una pagina web que consulta una api para obtener informacion acerca de diferentes topicos_
_Por ejemplo al ingresar la palabra "dog" buscara todos los post relacionados con perros_

_Como consideración se debe tener que se puede hacer un total de 500 peticiones a la API por dia por lo que las busquedas estan limitadas_
_Y además las busquedas deben ser realizadas en ingles para tener mayor coincidencia con los datos de la API_

## Link del proyecto

_Puedes revisar el proyecto deployado en el siguiente enlace_

* [https://rokket-app-d7e0e.web.app/](https://rokket-app-d7e0e.web.app/)


## Comenzando

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos

_Que cosas necesitas para instalar el software y como instalarlas_

```
Instalar Node js/npm    Se puede descargar desde --->  https://nodejs.org/es/
Descargar el Proyecto desde este repositorio
```

### Instalación

_Abrir consola y navegar con comando "cd" hasta el proyecto_

_Ejemplo si el proyecto se encuentra en el escritorio_

```
C://users/usuario> cd desktop
```
```
C://users/usuario/desktop> cd rokket-app
```
_Luego ejercutar npm install para instalar las dependencias del proyecto_

```
C://users/usuario/desktop/rokket-app> npm install
```
_Finalmente ejecuta el comando npm start para ejecutarlo de manera local_
```
C://users/usuario/desktop/rokket-app> npm start
```
_Se abrira el navegador ejecutando el proyecto_


## Construido con 

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Reactjs](https://es.reactjs.org/) - El framework web usado fue Reactjs.
* [npm](https://nodejs.org/es/) - Manejador de dependencias.
* [Hooks](https://es.reactjs.org/docs/hooks-intro.html) - useState y useEffect.
* [Redux](https://es.redux.js.org/) - Para manejar el estado de la aplicacion (paginacion, datos de la api y post).
* [react-router-dom](https://redux.js.org/advanced/usage-with-react-router) - para manejar la url.
* [bootstrap](https://getbootstrap.com/) - Para crear el componente de paginación.
* [material-ui](https://material-ui.com/) - Para obtener iconos de la información de los post.
