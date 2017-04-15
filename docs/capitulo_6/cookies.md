# Manejo de cookies en ExpressJS

## ¿Qué es una cookie?

Las cookies son piezas pequeñas de datos enviadas desde una página Web y se guardan en el navegador del usuario, mientras está navegando por dicha página Web. Cada vez que el usuario recarga la página, el navegador envía la información de vuelta a la Web o al servidor, para identificar la actividad anterior del usuario.

## Instalación

Lo primero que se debe hacer para permitir el manejo de las cookies es instalar el paquete `cookie` a través de npm. El comando para instalarlo es:

```
$ npm install cookie
```

También podemos disponer de un middleware que nos proporciona npm, llamado `cookie-parser`:

```
$ npm install cookie-parser
```

## Sintaxis (cookie-parser)

Cookie-parser parsea el encabezado de Cookie y rellena req.cookies con un objeto marcado con los nombres de las cookies. Para establecer una nueva cookie, podemos definir una nueva ruta en nuestra aplicación Express:

```javascript
app.get('/cookie', function(req, res)
{
  res.cookie(cookie_name, 'cookie_value').send('Cookie is set');
});
```
Para comprobar si la cookie se ha establecido o no, vamos a la consola del navegador y escribimos **document.cookie**.

El navegador envía esa cookie al servidor, cada vez que solicite ese sitio Web. Por último, para obtener una cookie que un navegador puede estar enviando al servidor adjuntándolo al encabezado de la solicitud, podemos escribir el siguiente código:

```javascript
app.get('/', function(req, res){
  console.log("Cookies : ", req.cookies);
});
```

## ¿Cómo establecer una fecha de caducidad de una cookie?

La fecha para que dicha cookie ya no sea válida la podemos establecer con:

```javascript
res.cookie(name, 'value', {expire : new Date() + 9999});
```

Las opciones de adición de cookies se pueden establecer pasando un objeto como argumento que lleva configuraciones adicionales para las cookies. Una alternativa para fijar la expiración es usar la propiedad opcional **maxAge**:

```javascript
res.cookie(name, 'value', {maxAge : 9999});
```

## ¿Cómo borrar una cookie existente?

Las cookies existentes pueden ser borradas fácilmente usando el método **clearCookie**, que acepta el nombre de la cookie que se quiere borrar.

```javascript
app.get('/clearcookie', function(req, res){
  clearCookie('cookie_name');
  res.send('Cookie deleted');
});
```

Accediendo a la consola del navegador, podemos comprobar como la cookie se ha borrado con éxito.
