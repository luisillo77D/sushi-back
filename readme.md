
# Sushi-back

## Endpoints

### PRODUCTOS

#### GET /api/products
- Descripción: Recuperar una lista de elementos de sushi.
- Parámetros: Ninguno.
- Respuesta: Un arreglo JSON que contiene elementos de sushi.

#### GET /api/products/{id}
- Descripción: Recuperar un elemento de sushi específico por su ID.
- Parámetros: El ID del elemento de sushi en la ruta de URL.
- Respuesta: El elemento de sushi solicitado como un objeto JSON.

#### GET /api/products/category/{id}
- Descripción: Recuperar una lista de elementos de sushi por categoría.
- Parámetros: El ID de la categoría en la ruta de URL.
- Respuesta: Un arreglo JSON que contiene elementos de sushi filtrados por categoría.


### AUTENTIFICACION

#### POST /api/auth/register
- Descripción: Registrar un nuevo usuario.
- Parámetros: Un objeto JSON que contiene los datos del usuario a registrar (nombre, correo electrónico y contraseña).
- Respuesta: Un objeto JSON que contiene el usuario registrado.

#### POST /api/auth/login
- Descripción: Iniciar sesión con las credenciales de un usuario registrado.
- Parámetros: Un objeto JSON que contiene las credenciales del usuario (correo electrónico y contraseña).
- Respuesta: Un objeto JSON que contiene el token de acceso para el usuario autenticado.

#### POST /api/auth/logout
- Descripción: Cerrar sesión del usuario autenticado.
- Parámetros: Ninguno.
- Respuesta: Un objeto JSON que indica si la sesión se cerró correctamente.

### CARRITO

#### POST /api/carrito/crear
- Descripcion: Crea un carrito para el usuario pero solo se usa cuando se registra un usuario.
  
#### POST /api/carrito/vaciar
- Descripcion: Vacia el carrito del usuario activo
- Parametros: ninguno
- Respuesta: Regresa un objeto JSON con el mensaje de resultado

#### POST /api/carrito/pay-car
- Descripcion: Vacia el carrito del usuario activo  Y simula una compra q se guarda en otra tabla
- Parametros: ninguno
- Respuesta: Regresa un objeto JSON con el mensaje de resultado

#### GET /api/carrito
- Descripción: Recuperar el carrito de compras del usuario autenticado.
- Parámetros: Ninguno.
- Respuesta: Un objeto JSON que contiene los elementos del carrito de compras.

#### POST /api/carrito/agregar
- Descripción: Agregar un elemento al carrito de compras del usuario autenticado.
- Parámetros: Un objeto JSON que contiene los detalles del elemento a agregayr (ID del producto y cantidad).
- Respuesta: Un objeto JSON que indica si el elemento se agregó correctamente al carrito.

#### PUT /api/cart/{id}
- Descripción: Actualizar la cantidad de un elemento en el carrito de compras del usuario autenticado.
- Parámetros: El ID del elemento en el carrito de compras en la ruta de URL y un objeto JSON que contiene la nueva cantidad.
- Respuesta: Un objeto JSON que indica si la cantidad del elemento se actualizó correctamente en el carrito.


### COMPRAS

#### GET /api/compras
- Descripción: Recuperar una lista de compras realizadas por el usuario autenticado.
- Parámetros: Ninguno.
- Respuesta: Un arreglo JSON que contiene las compras realizadas.

#### GET /api/compras/{id}
- Descripción: Recuperar los detalles de una compra específica por su ID.
- Parámetros: El ID de la compra en la ruta de URL.
- Respuesta: Los detalles de la compra solicitada como un objeto JSON.

#### GET /api/compras/all
- Descripción: Recuperar una lista de todas las compras realizadas.
- Parámetros: Ninguno.
- Respuesta: Un arreglo JSON que contiene las compras realizadas.

