# Express Sessions

Manejar las sesiones en una aplicación web es importante, ya que sin ellas no seremos capaces de reconocer al usuario y su actividad.

Las cookies y URL son aptos para transportar datos entre cliente y servidor. Asignamos a cada usuario un ID y las siguientes peticiones que realice se harán usando ese ID. La información asociada al cliente se almacena en el servidor vinculado a ese ID.

Para poder usar las sesiones necesitamos instalar `express-session` de la siguiente manera:
`npm install --save express-session`.

Para añadirlo en nuestro código:
```javascript
var session = require('express-session')
```

#### session(options)
Crea un middleware de sesión con las opciones `options`.
Los datos de la sesión no se almacenan en la cookie en sí, sólo el ID de la sesión. Los datos de la sesión se almacenan en el lado del servidor.

Algunas opciones son:

* `cookie`: objeto que almacena los ajustes de la cookie ID. Sus valores por defecto son: `{ path: '/', httpOnly: true, secure: false, maxAge: null }`. En este objeto se pueden establecer una serie de opciones:
    * cookie.domain
    * cookie.expires
    * cookie.httpOnly
    * cookie.maxAge
    * cookie.path
    * cookie.secure

Para almacenar o acceder a información de la sesión usamos `req.session`.

### Algunos métodos de session

##### session.destroy(callback)
Destruye la sesión y quita el valor que tiene la propiedad req.session. Una vez completado, se invoca el callback.

```javascript
req.session.destroy(function(err) {
  // cannot access session here
})
```

##### session.reload(callback)
Vuelve a cargar la sesión con los datos almacenados y reestablece lel objeto req.session. Una vez completado, se invoca el callback.

```javascript
req.session.reload(function(err) {
  // session updated
})
```

### req.sesion.id
Cada sesión tiene un único ID asociado.

### req.sessionID
Para obtener el ID de la sesión, accedemos a `req.sessionID`.
